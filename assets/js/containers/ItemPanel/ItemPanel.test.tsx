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
      selected: false,
      image: 'kokiri-sword'
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
    expect(items).toHaveLength(1);

    const item: ReactTestInstance = items[0];
    expect(item.props.id).toBe(1);
    expect(item.props.name).toBe('Kokiri Sword');
    expect(item.props.image).toBe('kokiri-sword');
    expect(item.props.selected).toBe(false);
    expect(item.props.clickHandler).toBeTruthy();
  });

  it('clicking on an image marks it as selected', async () => {
    const { getByAltText } = render(
      <ApolloContext.Provider value={client}>
        <ItemPanel />
      </ApolloContext.Provider>
    );
    expect(client.query).toBeCalledTimes(1);

    const image = await waitForElement(() => getByAltText('Kokiri Sword'));
    expect(image).toHaveClass('unselected');

    fireEvent.click(image);

    const selectedImage = await waitForElement(() => getByAltText('Kokiri Sword'));
    expect(selectedImage).not.toHaveClass();
  });
});
