import React from 'react';
import {shallow} from 'enzyme';
import SearchBox from './SearchBox';

it('expect SearchBox component to be rendered', () => {
    const wrapper = shallow(<SearchBox/>);
    const input = wrapper.find('input');
    expect(wrapper).toMatchSnapshot();
    expect(input.length).toEqual(1);
    //input.simulate('change',{ target: { value: 'Changed' } });
    //expect(input.props().value).toEqual('Changed');
})