/* eslint-disable react/prop-types */

export const Top = ({ title, activeCard }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{activeCard}</p>
    </>
  );
};
