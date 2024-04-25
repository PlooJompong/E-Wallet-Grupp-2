/* eslint-disable react/prop-types */
import './TopStyles.css';

export const Top = ({ title, activeCard }) => {
  return (
    <div className="top-container">
      <h1 className="top-title">{title}</h1>
      <p className="top-active">{activeCard}</p>
    </div>
  );
};
