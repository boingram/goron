import React from 'react';
import TestRenderer, { ReactTestRenderer, ReactTestInstance } from 'react-test-renderer';

import Area from './Area';
import Location from '../Location/Location';

describe('Area', (): void => {
  const name = 'Overworld';
  const locations = [
    {
      id: 1,
      name: 'Kokiri Sword Chest',
      area: 'Overworld',
      visited: false,
      accessible: true
    }
  ];
  const clickHandler = (): void => {};

  it('displays an unopened area', (): void => {
    const open = false;

    const testRenderer: ReactTestRenderer = TestRenderer.create(
      <Area name={name} locations={locations} open={open} clickHandler={clickHandler} />
    );

    const instance: ReactTestInstance = testRenderer.root;
    const area: ReactTestInstance = instance.findByType(Area);
    expect(area.props.name).toBe(name);
    expect(area.props.locations).toBe(locations);
    expect(area.props.open).toBe(open);
    expect(area.props.clickHandler).toBe(clickHandler);

    const div = area.findByType('div');
    expect(div.props.className).toBe('area');

    const button: ReactTestInstance = area.findByType('button');
    expect(button.children).toEqual([name]);

    const ul: ReactTestInstance = area.findByType('ul');
    expect(ul.props.children).toHaveLength(0);

    const locationComponents: ReactTestInstance[] = area.findAllByType(Location);
    expect(locationComponents).toHaveLength(0);

    // const li: ReactTestInstance = area.findByType('li');
    // expect(li.props.className).toBe('accessible');
    // expect(li.props.children).toBe(['Kokiri Sword Chest']);
  });

  it('displays an opened area', (): void => {
    const open = true;

    const testRenderer: ReactTestRenderer = TestRenderer.create(
      <Area name={name} locations={locations} open={open} clickHandler={clickHandler} />
    );

    const instance: ReactTestInstance = testRenderer.root;
    const area: ReactTestInstance = instance.findByType(Area);
    expect(area.props.name).toBe(name);
    expect(area.props.locations).toBe(locations);
    expect(area.props.open).toBe(open);
    expect(area.props.clickHandler).toBe(clickHandler);

    const div = area.findByType('div');
    expect(div.props.className).toBe('area');

    const button: ReactTestInstance = area.findByType('button');
    expect(button.children).toEqual([name]);

    const ul: ReactTestInstance = area.findByType('ul');
    expect(ul.props.children).toHaveLength(1);

    const locationComponents: ReactTestInstance[] = area.findAllByType(Location);
    expect(locationComponents).toHaveLength(1);

    const li: ReactTestInstance = area.findByType('li');
    expect(li.props.className).toBe('accessible');
    expect(li.props.children).toBe('Kokiri Sword Chest');
  });
});

export {};
