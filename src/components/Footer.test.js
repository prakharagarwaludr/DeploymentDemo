import React from 'react';
import { render } from 'enzyme';
import Footer from './Footer';

 describe('<Footer />', () => {
  it('should render Footer Value', () => {
      const wrapper = render(<Footer />);
      const span = wrapper.find('span');
      const text = span.text();      
    expect(text).toBe('This is a Footer Part');
  });
 });