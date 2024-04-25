import './CardFormStyles.css';

export const CardForm = () => {
  return (
    <div className="card-form">
      <form>
        <label>card number</label>
        <input type="text" />
        <label>cardholder name</label>
        <input type="firstname lastname" />
        <label>valid thru</label>
        <input type="text" />
        <label>ccv</label>
        <input type="text" />
        <label>vendor</label>
        <select id="vendor" name="vendor">
          <option value="bitcoin">Bitcoin</option>
          <option value="ninja bank">Ninja bank</option>
          <option value="block chain">Block Chain</option>
          <option value="evil corp">Evil Corp</option>
        </select>
      </form>
    </div>
  );
};
