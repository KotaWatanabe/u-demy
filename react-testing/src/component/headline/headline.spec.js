import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';

import { findByTestAttr } from '../../../utils/index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component' ,() =>{

    // describe('Checking Proptypes',() =>{

    //     it('Should not throw a warning', () => {
    //         const expectedProps = {
    //             header: 'Test Header',
    //             desc: 'Test Desc',
    //             tempArr: [{
    //                 fName:'Test',
    //                 lName:'Test',
    //                 email:'test@email.com',
    //                 age: 23,
    //                 onlineStatus:false
    //             }]
    //         };

    //         const propsErr = checkProps(Headline, expectedProps)
    //         expect(propsErr).toBeUndefined();
    //     })
    // })

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };

            wrapper = setUp(props)
        })

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper,'headline');
            expect(component.length).toBe(1);
        })
        it('Should render h1', () => {
            const h1 = findByTestAttr(wrapper, 'header')
            expect(h1.length).toBe(1);
        })
        it('Should render desc', () => {
            const desc = findByTestAttr(wrapper, 'desc')
            expect(desc.length).toBe(1);
        })

    });

    describe('Have No props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('Should not render anything', () => {
            const component = findByTestAttr(wrapper,'headline');
            expect(component.length).toBe(0);
        })
    });
})

