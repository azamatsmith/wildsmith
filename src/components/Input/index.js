import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Input.scss';

const InputWrapper = styled.div`
  input:focus {
    border-color: ${({theme}) => theme.orange};
  }

  textarea:focus {
    border-color: ${({theme}) => theme.orange};
  }
`;

function Input({label, textarea, ...rest}) {
  const baseClass = 'ba br2 b--black pa3 mid-gray outline-0 bw1';
  return (
    <InputWrapper className="Input flex flex-column mt3">
      {label && (
        <label className="f4 sans-serif mid-gray fw3 pv3">{label}</label>
      )}
      {textarea ? (
        <textarea aria-label={label} rows="8" className={baseClass} {...rest} />
      ) : (
        <input aria-label={label} className={baseClass} {...rest} />
      )}
    </InputWrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  textarea: PropTypes.bool,
};

Input.defaultProps = {
  label: null,
  textarea: false,
};

export default Input;
