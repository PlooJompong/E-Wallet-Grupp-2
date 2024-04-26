/* eslint-disable react/prop-types */
import './ButtonStyles.css';

export const Button = ({ children, onClick, ...props }) => {
  return (
    <button className="btn" onClick={onClick} {...props}>
      {children}
    </button>
  );
};
