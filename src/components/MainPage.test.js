import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        robots: [],
        searchField: '',
        onSearchChange: jest.fn(),
        onRequestRobots: jest.fn(),
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps} />);
})

it('expect to render MainPage correctly without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('expect to filter robots empty', () => {
    expect(wrapper.instance().filteredRobots()).toEqual([]);
})

it('expect to filter robots not empty', () => {
    const mockProps2 = {
        robots: [{
            email: "Sincere@april.biz",
            id: 1,
            name: "Leanne Graham",
            phone: "1-770-736-8031 x56442",
            username: "Bret",
            website: "hildegard.org"
        }],
        searchField: 'leanne',
        onSearchChange: jest.fn(),
        onRequestRobots: jest.fn(),
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps2} />);
    
    expect(wrapper.instance().filteredRobots()).toEqual([{
        email: "Sincere@april.biz",
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        username: "Bret",
        website: "hildegard.org"
    }]);
})

it('expect to filter robots correctly', () => {
    const mockProps3 = {
        robots: [{
            email: "Sincere@april.biz",
            id: 1,
            name: "Leanne Graham",
            phone: "1-770-736-8031 x56442",
            username: "Bret",
            website: "hildegard.org"
        }],
        searchField: 'john',
        onSearchChange: jest.fn(),
        onRequestRobots: jest.fn(),
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps3} />);
    
    expect(wrapper.instance().filteredRobots()).toEqual([]);
})

it('expect is pending true to not show cardlist', () => {
    const mockProps4 = {
        robots: [],
        searchField: 'john',
        onSearchChange: jest.fn(),
        onRequestRobots: jest.fn(),
        isPending: true
    }
    wrapper = shallow(<MainPage {...mockProps4} />);
    
    expect(wrapper).toMatchSnapshot();  
})