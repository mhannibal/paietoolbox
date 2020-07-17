import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const NumberInput = ({name, label, onChange, placeholder, value, error, readonly}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }
  return (
    <div className={''}>
      
      <div className="field row">
        
        {
        label &&
        <Col lg="2">
          <label htmlFor="{name}">{label}</label> 
        </Col>
        }
        <Col>
          <input
            readOnly= {readonly}
            type="number"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
         
        {error && <div className="alert alert-danger">{error}</div>}
        </Col>
      </div>
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.number,
  error: PropTypes.string,
  readonly:PropTypes.bool
};

export default NumberInput;
