// react libraries
import React from 'react';

/**
 * @desc reuseableInpu
*/
const reuseableInput = (props) => (
    <input type={props.type}
    className="form-control"  
    id={props.id}
    name={props.name}
    value = {props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    aria-describedby="inputGroupPrepend" required />
 );

export default reuseableInput;
