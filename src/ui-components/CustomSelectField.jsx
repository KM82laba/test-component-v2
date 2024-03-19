import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CustomSelectField = ({ options, inputId, placeholder }) => {
  // Создаем состояние для отслеживания выбранного значения
  const [selectedValue, setSelectedValue] = useState('');

  // Функция для обработки изменения выбранного значения
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Функция для очистки выбранного значения
  const handleClear = () => {
    setSelectedValue('');
  };

  return (
    <div className={`custom-select ${selectedValue ? 'selected' : ''}`}>
      <div className="select-wrapper">
        <div className="select-value">{selectedValue}</div>
        <div className="select-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              width="12"
              height="12"
              fill="#747775"
            >
                <path 
                    d="M1.175 0L5 3.81667L8.825 0L10 1.175L5 6.175L0 1.175L1.175 0Z"
                    fill="rgba(116,119,117,1)"
                    fillRule="nonzero"
                />
            </svg>
        </div>
        {selectedValue && (
          <div className="clear-icon" onClick={handleClear}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              width="12"
              height="12"
              fill="#747775"
            >
              <path d="M11.8327 1.34102L10.6577 0.166016L5.99935 4.82435L1.34102 0.166016L0.166016 1.34102L4.82435 5.99935L0.166016 10.6577L1.34102 11.8327L5.99935 7.17435L10.6577 11.8327L11.8327 10.6577L7.17435 5.99935L11.8327 1.34102Z" />
            </svg>
          </div>
        )}
      </div>
      <select
        id={inputId}
        value={selectedValue}
        onChange={handleChange}
        className="select-input"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <span className="label">{placeholder}</span>
      <span className="focus-bg"></span>
    </div>
  );
};

CustomSelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CustomSelectField;
