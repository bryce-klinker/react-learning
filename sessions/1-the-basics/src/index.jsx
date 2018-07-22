import React from 'react';
import { render } from 'react-dom';
import Stateful from './stateful-component';
import Stateless from './stateless-component';
import Composition from './composition';

render(
  <div>
    <Stateful />
    <span style={{ display: 'block', height: '20px' }} />
    <Stateless />
    <span style={{ display: 'block', height: '20px' }} />
    <Composition>
      <Stateful />
    </Composition>
    <span style={{ display: 'block', height: '20px' }} />
    <PassMeData name="Dwight Shrutte" title="Assitant to the Regional Manager" />
  </div>,
  document.getElementById('root')
);
