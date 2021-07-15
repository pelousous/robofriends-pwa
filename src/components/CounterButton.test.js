import React from 'react';
import {shallow} from 'enzyme';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
    expect(shallow(<CounterButton color="red"/>)).toMatchSnapshot();
})

it('expect the counter to increment on click',() => {
    const wrapper = shallow(<CounterButton color="red"/>);

    expect(wrapper.find('button#counter').length).toEqual(1);

    expect(wrapper.prop('color')).toBe('red');
    wrapper.find('button#counter').simulate('click');
    expect(wrapper.state()).toEqual({count: 2});

    wrapper.find('button#counter').simulate('click');
    expect(wrapper.state()).toEqual({count: 3});
})