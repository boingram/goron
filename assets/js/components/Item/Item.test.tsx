import React from 'react';
import TestRenderer, {
  ReactTestRenderer,
  ReactTestInstance
} from 'react-test-renderer';

import Item from './Item';

describe('Item', () => {
  const id = 1;
  const name = 'Kokiri Sword';
  const image = 'kokiri-sword';
  const clickHandler = (): void => {};

  it('displays an unselected item', () => {
    const selected = false;

    const testRenderer: ReactTestRenderer = TestRenderer.create(
      <Item
        id={id}
        name={name}
        image={image}
        selected={selected}
        clickHandler={clickHandler}
      />
    );

    const instance: ReactTestInstance = testRenderer.root;
    const item: ReactTestInstance = instance.findByType(Item);
    expect(item.props.id).toBe(id);
    expect(item.props.name).toBe(name);
    expect(item.props.image).toBe(image);
    expect(item.props.selected).toBe(selected);
    expect(item.props.clickHandler).toBe(clickHandler);
    expect(item.children).toHaveLength(1);

    const div: ReactTestInstance = item.findByType('div');
    expect(div.props.className).toBe('item');

    const img: ReactTestInstance = div.findByType('img');
    expect(img.props.className).toBe('unselected');
    expect(img.props.src).toBe(`images/items/${image}.png`);
    expect(img.props.onClick).toBeTruthy();
    expect(img.props.alt).toBe(name);
  });

  it('displays a selected item', () => {
    const selected = true;

    const testRenderer: ReactTestRenderer = TestRenderer.create(
      <Item
        id={id}
        name={name}
        image={image}
        selected={selected}
        clickHandler={clickHandler}
      />
    );

    const instance: ReactTestInstance = testRenderer.root;
    const item: ReactTestInstance = instance.findByType(Item);
    expect(item.props.id).toBe(id);
    expect(item.props.name).toBe(name);
    expect(item.props.image).toBe(image);
    expect(item.props.selected).toBe(selected);
    expect(item.props.clickHandler).toBe(clickHandler);
    expect(item.children).toHaveLength(1);

    const div: ReactTestInstance = item.findByType('div');
    expect(div.props.className).toBe('item');

    const img: ReactTestInstance = div.findByType('img');
    expect(img.props.className).toBe('');
    expect(img.props.src).toBe(`images/items/${image}.png`);
    expect(img.props.onClick).toBeTruthy();
    expect(img.props.alt).toBe(name);
  });
});

export {};
