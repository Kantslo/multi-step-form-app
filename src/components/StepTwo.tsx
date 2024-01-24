import { useState } from "react";

const StepTwo = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlan(e.target.value);
    console.log(selectedPlan);
  };

  return (
    <>
      <form>
        <label>
          <input
            type="radio"
            value="arcade"
            checked={selectedPlan === 'arcade'}
            onChange={handlePlanChange}
          />
          Arcade
        </label>
        <label>
          <input
            type="radio"
            value="advanced"
            checked={selectedPlan === 'advanced'}
            onChange={handlePlanChange}
          />
          Advanced
        </label>
        <label>
          <input
            type="radio"
            value="pro"
            checked={selectedPlan === 'pro'}
            onChange={handlePlanChange}
          />
          Pro
        </label>
      </form>
    </>
  )
};

export default StepTwo;