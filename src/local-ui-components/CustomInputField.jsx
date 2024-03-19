import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Input } from '@aws-amplify/ui-react';

const CustomInputField = ({ placeholder, type , inputId}) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const validateInput = () => {
    // Ваша логика валидации в зависимости от типа вводимых данных
    // В этом примере просто проверяем, не пустое ли поле
    return inputValue.trim() !== '';
  };

  return (
      <label className="inp">
        <input type={type} id={inputId} placeholder="&nbsp;"/>
        <span className="label">{placeholder}</span>
        <span className="focus-bg"></span>
      </label>
        
  );
};

CustomInputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomInputField;
