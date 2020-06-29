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
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {
    
                }
            };
            wrapper = shallow(<SharedButton {...props} />);
        })

        it('Should render a button', () => {    
            const button = findByTestAttr(wrapper,'sharedButton')
            expect(button.length).toBe(1);
        });
    })




})
