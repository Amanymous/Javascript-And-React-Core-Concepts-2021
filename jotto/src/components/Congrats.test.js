import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr,checkPropTypes } from '../../test/testUtils';
import Congrats from './Congrats'

const defaultProps = { success: false }

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
* Functional react component for congratulatory message.
* @function
* @param {object} props - React props.
* @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
*/

const setup = (props = {}) => {
    const setupProps = {...defaultProps,...props}
    return shallow(<Congrats {...setupProps} />)
} 

test('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)

})

test('render no text when `success` prop is false', () => {
    const wrapper = setup({ success: false })
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
})

test('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true })
    const message = findByTestAttr(wrapper, 'congrats-message')
    expect(message.text().length).not.toBe(1)

})

test('does not throw warning with the expected props', () => {
    const expectedProps = { success: false }
    expect(Congrats,expectedProps)
})