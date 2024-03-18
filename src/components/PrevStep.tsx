type PrevStepProps = {
  onClick: () => void;
};

export default function PrevStep({ onClick }: PrevStepProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#7f848a] rounded-[4px] px-4 py-3 text-white"
      type="button">
      Go Back
    </button>
  );
}
