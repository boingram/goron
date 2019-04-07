import React from 'react';
import TestRenderer, { ReactTestRenderer, ReactTestInstance, act } from 'react-test-renderer';
import { fireEvent, render, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { AxiosPromise } from 'axios';

import getAllItems from '../../api/goronApi';
import Item from '../../components/Item/Item';
import ItemModel from '../../api/models/itemModel';
import ItemPanel from './ItemPanel';

jest.mock('../../api/goronApi', () =>
  jest.fn(
    (): AxiosPromise<ItemModel[]> => {
      return Promise.resolve({
        data: [
          {
            id: 1,
            name: 'Kokiri Sword',
            selected: false,
            image: 'kokiri-sword'
          }
        ],
        status: 200,
        statusText: 'OK',
        headers: [],
        config: {}
      });
    }
  )
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('ItemPanel', () => {
  it('shows a list of items populated by an api call', async () => {
    const renderer: ReactTestRenderer = TestRenderer.create(<div />);
    await act(async () => {
      renderer.update(<ItemPanel />);
    });

    expect(getAllItems).toBeCalledTimes(1);

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
    const { getByAltText } = render(<ItemPanel />);
    expect(getAllItems).toBeCalledTimes(1);

    const image = await waitForElement(() => getByAltText('Kokiri Sword'));
    expect(image).toHaveClass('unselected');

    fireEvent.click(image);

    const selectedImage = await waitForElement(() => getByAltText('Kokiri Sword'));
    expect(selectedImage).not.toHaveClass();
  });
});
