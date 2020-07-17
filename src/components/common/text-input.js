import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }
  return (
    <div className={wrapperClass}>
      
      <div className="field row">
        <Col lg="2">
          <label htmlFor="{name}">{label}</label> 
        </Col>
        <Col>
          <input
            type="text"
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

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
