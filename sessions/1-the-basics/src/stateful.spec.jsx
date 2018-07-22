import React from 'react';
import TestRenderer from 'react-test-renderer';
import MockDate from 'mockdate';
import Stateful from './stateful';

describe('Stateful', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should show current time', () => {
    const currentDate = new Date(2018, 7, 20, 4, 19, 23);
    MockDate.set(currentDate);

    const instance = TestRenderer.create(<Stateful />).root;
    expect(instance.find(e => e.type === 'span').children).toContain(currentDate.toISOString());
  });

  it('should show new time every second', () => {
    MockDate.set(new Date(2018, 7, 20, 4, 19, 23));

    const renderer = TestRenderer.create(<Stateful />);

    const newTime = new Date(2018, 7, 20, 4, 19, 24);
    MockDate.set(newTime);

    jest.runTimersToTime(1000);
    expect(renderer.root.find(e => e.type === 'span').children).toContain(newTime.toISOString());
  });
});
