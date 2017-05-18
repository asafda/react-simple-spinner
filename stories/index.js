import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Spinner from '../src';

storiesOf('Spinner', module)
  .add('with no props', () => (
    <Spinner/>
  ))
  .add('with custom props', () => (
    <Spinner bgColor="rgba(150,100, 150, 0.2)"
      spinnerColor="rgba(150, 100, 150, 0.8)"
      diameter="100px"
      thickness="15px"
      duration="1.5s"/>
  ));

