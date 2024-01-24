
const PlanForm = () => {
  return (
    <>
      <h2>Choose Your Plan</h2>
      <div>
        <label>
          <input
            type="radio"
          />
          Arcade
        </label>
        <label>
          <input
            type="radio"
          />
          Advanced
        </label>
        <label>
          <input
            type="radio"
          />
          Pro
        </label>
      </div>

      <h2>Choose Billing Period</h2>
      <div>
        <label>
          <input
            type="radio"
          />
          Monthly Billing
        </label>
        <label>
          <input
            type="radio"
          />
          Yearly Billing
        </label>
      </div>
    </>
  );
};

export default PlanForm;
