import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../components/home';

describe('Home', () => {
  it('should render the Home component', () => {
    const wrap = shallow(<Home />);

    expect(wrap.exists()).toBe(true);
  });
});
