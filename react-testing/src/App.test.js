import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../utils';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper
};

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                title: 'Example title 1',
                body: 'Some text'
            },{
                title: 'Example title 2',
                body: 'Some text'
            },{
                title: 'Example title 3',
                body: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent')
        expect(component.length).toBe(1);
    })

    it('exampleMethod_updateState Method should update state as expected',() => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updateState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })

    it('exampleMethod_returnsAValue Method should update state as expected',() => {
        const classInstance = wrapper.instance();
        const testNum = 1
        const returnNum = classInstance.exampleMethod_returnsAValue(testNum);
        expect(returnNum).toBe(testNum + 1);
    })

});
