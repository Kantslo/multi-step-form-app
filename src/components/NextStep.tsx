type NextStepButtonProps = {
  onClick: () => void;
};

function NextStep({ onClick }: NextStepButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-[#022959] rounded-[4px] px-4 py-3 text-white"
        type="button">
        Next Step
      </button>
    </>
  );
}

export default NextStep;
