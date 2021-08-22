import { foo } from "./test"
import React from "react"

class hello extends React.Component{
    render(){
        return <div>hi</div>
    }}
export default hello
var age = 22
function hi() {
    return `${foo} and  ${age}`
}
hi()
/* eslint-disable-next-line no-console */
console.log(hi())
console.log("yo")