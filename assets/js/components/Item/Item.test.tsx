import React from 'react';
import TestRenderer, { ReactTestRenderer, ReactTestInstance } from 'react-test-renderer';

import Item from './Item';

describe('Item', () => {
  const id = 1;
  const name = 'Kokiri Sword';
  const image = 'kokiri-sword';
  const upgradeNames: string[] = [];
  const upgradeImages: string[] = [];
  const maxLevel = 1;
  const clickHandler = (): void => {};

  it('displays an unselected item', () => {
    const level = 0;

    const testRenderer: ReactTestRenderer = TestRenderer.create(
      <Item
        id={id}
        name={name}
        image={image}
        level={level}
        upgradeNames={upgradeNames}
        upgradeImages={upgradeImages}
        maxLevel={maxLevel}
        clickHandler={clickHandler}
      />
    );

    const instance: ReactTestInstance = testRenderer.root;
    const item: ReactTestInstance = instance.findByType(Item);
    expect(item.props.id).toBe(id);
    expect(item.props.name).toBe(name);
    expect(item.props.image).toBe(image);
    expect(item.props.upgradeNames).toBe(upgradeNames);
    expect(item.props.upgradeImages).toBe(upgradeImages);
    expect(item.props.level).toBe(level);
    expect(item.props.maxLevel).toBe(maxLevel);
    expect(item.props.clickHandler).toBe(clickHandler);
    expect(item.children).toHaveLength(1);

    const div: ReactTestInstance = item.findByType('div');
    expect(div.props.className).toBe('item');

    const img: ReactTestInstance = div.findByType('img');
    expect(img.props.className).toBe('unselected');
    expect(img.props.src).toBe(`images/items/${image}.png`);
    expect(img.props.onMouseDown).toBeTruthy();
    expect(img.props.alt).toBe(name);
  });

  it('displays a selected item', () => {
    const level = 1;

    const testRenderer: ReactTestRenderer = TestRenderer.create(
      <Item
        id={id}
        name={name}
        image={image}
        level={level}
        upgradeNames={upgradeNames}
        upgradeImages={upgradeImages}
        maxLevel={maxLevel}
        clickHandler={clickHandler}
      />
    );

    const instance: ReactTestInstance = testRenderer.root;
    const item: ReactTestInstance = instance.findByType(Item);
    expect(item.props.id).toBe(id);
    expect(item.props.name).toBe(name);
    expect(item.props.image).toBe(image);
    expect(item.props.upgradeNames).toBe(upgradeNames);
    expect(item.props.upgradeImages).toBe(upgradeImages);
    expect(item.props.level).toBe(level);
    expect(item.props.maxLevel).toBe(maxLevel);
    expect(item.props.clickHandler).toBe(clickHandler);
    expect(item.children).toHaveLength(1);

    const div: ReactTestInstance = item.findByType('div');
    expect(div.props.className).toBe('item');

    const img: ReactTestInstance = div.findByType('img');
    expect(img.props.className).toBe('');
    expect(img.props.src).toBe(`images/items/${image}.png`);
    expect(img.props.onMouseDown).toBeTruthy();
    expect(img.props.alt).toBe(name);
  });

  it('displays an upgrade image correctly', () => {
    const level = 2;

    const testRenderer: ReactTestRenderer = TestRenderer.create(
      <Item
        id={2}
        name="Ocarina"
        image="ocarina-1"
        level={level}
        upgradeNames={upgradeNames}
        upgradeImages={['ocarina-2']}
        maxLevel={2}
        clickHandler={clickHandler}
      />
    );

    const instance: ReactTestInstance = testRenderer.root;
    const item: ReactTestInstance = instance.findByType(Item);
    expect(item.props.id).toBe(2);
    expect(item.props.name).toBe('Ocarina');
    expect(item.props.image).toBe('ocarina-1');
    expect(item.props.upgradeNames).toBe(upgradeNames);
    expect(item.props.upgradeImages).toEqual(['ocarina-2']);
    expect(item.props.level).toBe(level);
    expect(item.props.maxLevel).toBe(2);
    expect(item.props.clickHandler).toBe(clickHandler);
    expect(item.children).toHaveLength(1);

    const div: ReactTestInstance = item.findByType('div');
    expect(div.props.className).toBe('item');

    const img: ReactTestInstance = div.findByType('img');
    expect(img.props.className).toBe('');
    expect(img.props.src).toBe(`images/items/ocarina-2.png`);
    expect(img.props.onMouseDown).toBeTruthy();
    expect(img.props.alt).toBe('Ocarina');
  });
});

export {};
