import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';





describe('App',  () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
      expect(app).toMatchSnapshot();
  });




  
  it('initializas the `state` with a empty lis of gifs', () => {
    expect(app.state().gifts).toEqual([]);
  });
  

  describe('when click `add gif` button', () => {

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });


    afterEach(() => {
      app.setState({gifts: []});
    });
    it('adds a new gift to `state`', () => {

      expect(app.state().gifts).toEqual([{id: 1}]);
    });
    
    it('add a new gift tho the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(2);
    });
  });
  

});
