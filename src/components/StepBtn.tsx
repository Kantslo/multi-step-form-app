import React from "react";

function StepBtn() {
  return (
    <div
      style={{ justifyContent: isFirstStep ? "flex-end" : "space-between" }}
      className="flex flex-row items-center bg-white h-[72px] px-4 w-[100%]">
      {!isFirstStep && (
        <button
          className="bg-[#022959] rounded-[4px] px-4 py-3 text-white"
          type="button"
          onClick={prevStep}>
          Go Back
        </button>
      )}
      <button
        className="bg-[#022959] rounded-[4px] px-4 py-3 text-white"
        type="button"
        onClick={nextStep}>
        {isLastStep ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default StepBtn;
