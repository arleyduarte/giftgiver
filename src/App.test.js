import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('initializas the `state` with a empty lis of gifs', () => {
  expect(app.state().gifts).toEqual([]);
});


it('adds a new gift to `state` when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{id: 1}]);
});

it('add a new gift tho the rendered lis whe clicking the `add gif', () => {

  app.find('.btn-add').simulate('click');
  expect(app.find('.gift-list').children().length).toEqual(2);
});