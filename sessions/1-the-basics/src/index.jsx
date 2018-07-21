import React from 'react';
import { render } from 'react-dom';
import Stateful from './stateful-component';
import Stateless from './stateless-component';

render(
    <div>
        <Stateful />
        <span style={{ display: 'block', height: '20px'}}></span>
        <Stateless />
    </div>, 
    document.getElementById('root'));