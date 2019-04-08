import React from 'react';
import TestRenderer, { ReactTestRenderer, ReactTestInstance } from 'react-test-renderer';

import Location from './Location';

describe('Location', () => {
  const id = 1;
  const name = 'Kokiri Sword';
  const area = 'Overworld';
  const visited = false;

  it('displays an accessible location', () => {
    const accessible = true;

    const testRenderer: ReactTestRenderer = TestRenderer.create(
      <Location id={id} name={name} area={area} visited={visited} accessible={accessible} />
    );

    const instance: ReactTestInstance = testRenderer.root;
    const location: ReactTestInstance = instance.findByType(Location);
    expect(location.props.id).toBe(id);
    expect(location.props.name).toBe(name);
    expect(location.props.area).toBe(area);
    expect(location.props.visited).toBe(visited);
    expect(location.props.accessible).toBe(accessible);

    const li: ReactTestInstance = location.findByType('li');
    expect(li.props.className).toBe('accessible');
    expect(li.children).toEqual([name]);
  });

  it('displays an unaccessible location', () => {
    const accessible = false;

    const testRenderer: ReactTestRenderer = TestRenderer.create(
      <Location id={id} name={name} area={area} visited={visited} accessible={accessible} />
    );

    const instance: ReactTestInstance = testRenderer.root;
    const location: ReactTestInstance = instance.findByType(Location);
    expect(location.props.id).toBe(id);
    expect(location.props.name).toBe(name);
    expect(location.props.area).toBe(area);
    expect(location.props.visited).toBe(visited);
    expect(location.props.accessible).toBe(accessible);

    const li: ReactTestInstance = location.findByType('li');
    expect(li.props.className).toBe('unaccessible');
    expect(li.children).toEqual([name]);
  });
});

export {};
