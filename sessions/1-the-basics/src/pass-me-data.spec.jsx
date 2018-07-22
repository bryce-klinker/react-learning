import React from 'react';
import TestRenderer from 'react-test-renderer';
import PassMeData from './pass-me-data';

describe('PassMeData', () => {
  it('should provide props to component', () => {
    const renderer = TestRenderer.create(<PassMeData name="Bob Vance" title="Mr." />);
    expect(renderer.root.find(e => e.type === 'span').children).toContain('Mr. Bob Vance');
  });
});
