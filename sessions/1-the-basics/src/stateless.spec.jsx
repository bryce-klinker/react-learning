import React from 'react';
import TestRenderer from 'react-test-renderer';
import MockDate from 'mockdate';
import Stateless from './stateless';

describe('Stateless', () => {
  it('should show current date', () => {
    const currentTime = new Date(2018, 6, 12, 3, 4, 1);
    MockDate.set(currentTime);

    const renderer = TestRenderer.create(<Stateless />);
    expect(renderer.root.find(e => e.type === 'span').children).toContain(currentTime.toISOString());
  });
});
