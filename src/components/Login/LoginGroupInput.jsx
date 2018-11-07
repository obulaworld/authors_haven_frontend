// react libraries
import React, {Fragment} from 'react';

/**
 * @desc login group input
*/
 const LoginGroupInput = (props) => (
 <Fragment>
   <div className="input-group-prepend">
     <span className="input-group-text" id="inputGroupPrepend"><i className={props.icon}></i></span>
  </div>
 </Fragment>
);
                            
export default LoginGroupInput;      
                      