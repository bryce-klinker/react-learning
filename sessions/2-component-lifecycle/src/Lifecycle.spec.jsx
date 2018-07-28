import React from 'react';
import TestRenderer from 'react-test-renderer';
import MockDate from 'mockdate';
import Lifecycle from './Lifecycle';
import ajaxService from './ajaxService';

describe('Lifecycle', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'clearInterval');
    jest.spyOn(ajaxService, 'get');
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should be updating current time every second', () => {
    const originalTime = new Date(2018, 2, 3, 12, 3, 4);
    MockDate.set(originalTime);

    const renderer = TestRenderer.create(<Lifecycle />);
    const currentTime = new Date(2018, 2, 3, 12, 3, 5);
    MockDate.set(currentTime);

    expect(renderer.root.find(e => e.type === 'span').children).toContain(originalTime.toISOString());
    jest.runTimersToTime(1000);
    expect(renderer.root.find(e => e.type === 'span').children).toContain(currentTime.toISOString());
  });

  it('should remove timer when component is unmounted', () => {
    const renderer = TestRenderer.create(<Lifecycle />);
    renderer.unmount();
    jest.runTimersToTime(1000);

    expect(clearInterval).toHaveBeenCalled();
  });

  it('should get user from id when mounted', () => {
    TestRenderer.create(<Lifecycle id={5} />);
    expect(ajaxService.get).toHaveBeenCalledWith(5);
  });

  it('should show user once loaded', async () => {
    ajaxService.get.mockResolvedValue({ name: 'bob' });

    const renderer = TestRenderer.create(<Lifecycle id={8} />);
    await flushPromises();
    expect(renderer.root.findByType('h3').children).toContain('bob');
  });

  function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }
});
