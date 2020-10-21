import React from 'react';
import { shallow} from 'enzyme';

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
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
      
    });


    afterEach(() => {
      app.setState({gifts: []});
    });
    it('adds a new gift to `state`', () => {

      expect(app.state().gifts).toEqual([{id}]);
    });
    
    it('add a new gift tho the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });


    describe('and the user wants to remove the added gift', ()=> {
      beforeEach(() => {
        app.instance().removeGift(id);
        console.log('State beforeEach', app.state());
      });

      it('removes the gift from `state`', () => {


        expect(app.state().gifts).toEqual([]);
      });
    });

  });
  

});
