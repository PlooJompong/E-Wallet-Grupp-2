/* eslint-disable react/prop-types */
import './ButtonStyles.css';

export const Button = ({ children, ...props }) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};
