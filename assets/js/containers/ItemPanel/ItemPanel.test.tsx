import React from 'react';
import TestRenderer, { ReactTestRenderer, ReactTestInstance, act } from 'react-test-renderer';
import { fireEvent, render, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

import ApolloContext from '../../context';
import Item from '../../components/Item/Item';
import ItemPanel from './ItemPanel';
import { ItemsResult } from '../../api/models/graphql/itemQueries';

const itemsQueryData: ItemsResult = {
  items: [
    {
      id: 1,
      name: 'Kokiri Sword',
      upgradeNames: [],
      image: 'kokiri-sword',
      upgradeImages: [],
      level: 0,
      maxLevel: 1
    },
    {
      id: 2,
      name: 'Fairy Ocarina',
      upgradeNames: ['Ocarina of Time'],
      image: 'ocarina-1',
      upgradeImages: ['ocarina-2'],
      level: 0,
      maxLevel: 2
    }
  ]
};

jest.mock('apollo-boost');
const client = require('apollo-boost').getMockedApolloClient(itemsQueryData);

afterEach(() => {
  jest.clearAllMocks();
});

describe('ItemPanel', () => {
  it('shows a list of items populated by an api call', async () => {
    const renderer: ReactTestRenderer = TestRenderer.create(<div />);
    await act(async () => {
      renderer.update(
        <ApolloContext.Provider value={client}>
          <ItemPanel />
        </ApolloContext.Provider>
      );
    });
    expect(client.query).toBeCalledTimes(1);

    const instance: ReactTestInstance = renderer.root;

    const items: ReactTestInstance[] = instance.findAllByType(Item);
    expect(items).toHaveLength(2);

    items.forEach((item: ReactTestInstance) => {
      expect(item.props.id).toBeTruthy();
      expect(item.props.name).toBeTruthy();
      expect(item.props.image).toBeTruthy();
      expect(item.props.level).toBe(0);
      expect(item.props.clickHandler).toBeTruthy();
    });
  });

  it('clicking on an image changes the level', async () => {
    const { getByAltText } = render(
      <ApolloContext.Provider value={client}>
        <ItemPanel />
      </ApolloContext.Provider>
    );
    expect(client.query).toBeCalledTimes(1);

    const image = await waitForElement(() => getByAltText('Kokiri Sword'));
    expect(image).toHaveClass('unselected');

    fireEvent.mouseDown(image);
    const selectedImage = await waitForElement(() => getByAltText('Kokiri Sword'));
    expect(selectedImage).not.toHaveClass();

    fireEvent.mouseDown(image, { button: 2 });
    const unselectedImage = await waitForElement(() => getByAltText('Kokiri Sword'));
    expect(unselectedImage).toHaveClass('unselected');
  });
});
