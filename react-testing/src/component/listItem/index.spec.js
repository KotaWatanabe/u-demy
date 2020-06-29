import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../utils/index' 
import ListItem from './index';

describe('ListItem Component', () => {

    describe('Renders', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                title:'Example Titile',
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('Should renders without error',() => {
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1)
        })

        it('Should render a title',() => {
            const title = findByTestAttr(wrapper, 'title')
            expect(title.length).toBe(1)
        })
        it('Should render a desc',() => {
            const desc = findByTestAttr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })
    })

    describe("Should NOT render", () => {
        let wrapper
        beforeEach(() => {
            const props = {
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('Component is not rendered',() => {
            const component = findByTestAttr(wrapper,'listItem')
            expect(component.length).toBe(0);
        })
    })
})
