import React from 'react';
import { findByTestAttr } from './../../../utils/index';
import SharedButton from './index';
import { shallow } from 'enzyme';

// const setUp = (props={}) => {
//     const component = shallow(<SharedButton {...props} />);
//     return component;
// };

describe('ShareButton Component', () => {

    describe('Renders',() => {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            };
            wrapper = shallow(<SharedButton {...props} />);
        })

        it('Should render a button', () => {    
            const button = findByTestAttr(wrapper,'sharedButton')
            expect(button.length).toBe(1);
        });

        it('Should emit callback on click event', () => {
            const button = findByTestAttr(wrapper,'sharedButton')
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1)
        });
    })




})
