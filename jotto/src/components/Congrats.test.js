import React from 'react';
import EnzymeAdapter,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats'

EnzymeAdapter.configure({ adapter: new EnzymeAdapter() })

const setup = (props={})=>{
    return shallow(<Congrats {...props}/>)
}

test('renders without error',()=>{
     
})

test('render no text when `success` prop is false',()=>{

})

test('renders non-empty congrats message when `success` prop is true',()=>{

})  