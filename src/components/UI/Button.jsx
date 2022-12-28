import React from 'react';

const Button = ({ children, onClick, css, onMouseOver }) => {
  return (
    <button onClick={onClick} className={css} onMouseOver={onMouseOver}>
      {children}
    </button>
  );
};

export default Button;
