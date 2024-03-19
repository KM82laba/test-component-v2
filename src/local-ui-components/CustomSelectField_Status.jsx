import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CustomSelectField_Status = ({ options, inputId, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    onSelect(value); // Вызываем функцию обратного вызова при выборе опции
    setIsOpen(false);
  };

  return (
    <div className={`custom-select-status ${isOpen ? 'active' : ''}`}>
      <button
        className="select-button"
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="select-dropdown"
        onClick={toggleDropdown}
      >
        <span className="selected-value">{selectedValue || placeholder}</span>
        <span className="arrow"><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              width="12"
              height="12"
              fill="#747775"
            >
                 <path d="M1.175 0L5 3.81667L8.825 0L10 1.175L5 6.175L0 1.175L1.175 0Z"
                        fill="rgba(116,119,117,1)"
                        fillRule="nonzero"
                      /></svg></span>
      </button>
      <ul className="select-dropdown" role="listbox" id="select-dropdown">
        {options.map((option, index) => (
          <li key={index} role="option" onClick={() => handleOptionClick(option.label)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

CustomSelectField_Status.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired, // Добавленная функция обратного вызова
};

export default CustomSelectField_Status;
