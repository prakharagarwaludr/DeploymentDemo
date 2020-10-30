import React from 'react';
import { render } from 'enzyme';
import Footer from './Footer';

//This is a Test File for Footer Component .

 describe('<Footer />', () => {
  it('should render Footer Value', () => {
      const wrapper = render(<Footer />);
      const span = wrapper.find('span');
      const text = span.text();      
    expect(text).toBe('This is a Footer Part');
  });
 });

