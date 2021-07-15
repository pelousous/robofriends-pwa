import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render CardList Component', () => {
    const mockRobots = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    }];
    const cardList = shallow(<CardList robots={mockRobots}/>);

    expect(cardList.length).toEqual(1);
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})