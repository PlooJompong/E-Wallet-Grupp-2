/* eslint-disable react/prop-types */
import './ButtonStyles.css';

// Definiera en funktionell komponent Button med props destrukturerade
export const Button = ({ children, onClick, ...props }) => {
  return (
    // Returnera ett <button>-element med klassen 'btn', klick-hanterare (onClick) och andra props
    <button className="btn" onClick={onClick} {...props}>
      {children}
    </button>
  );
};
