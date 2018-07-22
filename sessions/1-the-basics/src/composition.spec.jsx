import React from 'react';
import TestRenderer from 'react-test-renderer';
import Composition from './composition';

describe('Composition', () => {
  it('should show child components', () => {
    const renderer = TestRenderer.create(
      <Composition>
        <span id="child">This is composed</span>
      </Composition>
    );

    const root = renderer.root;
    expect(root.find(e => e.type === 'span' && e.props.id === 'child').children).toContain('This is composed');
  });

  it('should show title', () => {
    const renderer = TestRenderer.create(<Composition>{'idk'}</Composition>);

    expect(renderer.root.find(e => e.type === 'h1').children).toContain('Composition:');
  });
});
