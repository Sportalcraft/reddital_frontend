import React from 'react';
import './validated-input.styles.css';

const ValidatedInput = (props) => {
  
  /**
   * update the value when the text in the textbox is changed
   */
  const changeHandler = event => {
    props.setVal(event.target.value);
  };
  
  // the return statement
  return (
  <div className="Validated-input">
    <input id={props.id} onChange={changeHandler} className="input textinput" placeholder={props.placeholder} type={props.type}></input> 
    <br />
    <label className="validator">{props.validator()}</label>
  </div>
);}





ValidatedInput.propTypes = {};

ValidatedInput.defaultProps = {};

export default ValidatedInput;
