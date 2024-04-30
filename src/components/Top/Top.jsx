/* eslint-disable react/prop-types */
import './TopStyles.css';

// Definiera en funktionell komponent med namnet Top.
export const Top = ({ title, activeCard }) => {
  // Returnera JSX som representerar det visuella gränssnittet för komponenten.
  return (
    <div className="top-container">
      {/* Rendera en rubrik (h1) med titeln som tillhandahålls som en prop. */}
      <h1 className="top-title">{title}</h1>
      {/* Rendera en paragraf (p) med den aktiva kortsinformationen som tillhandahålls som en prop. */}
      <p className="top-active">{activeCard}</p>
    </div>
  );
};
