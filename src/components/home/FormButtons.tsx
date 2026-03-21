import { Button } from "@/components/ui/Button";
import useOnBoardingStore from "@/store";

interface IFormButtonsProps {
  onBack?: () => void;
  onContinue?: () => void;
}

const FormButtons = ({ onBack, onContinue }: IFormButtonsProps) => {
  const step = useOnBoardingStore((state) => state.step);
  const setStep = useOnBoardingStore((state) => state.setStep);

  const onBackHandler = () => {
    if (onBack) {
      onBack();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="mx-auto mt-auto flex w-full items-center justify-center gap-4 pt-10 max-md:flex-col-reverse md:max-w-[90%]">
      <Button
        disabled={step === 1}
        onClick={onBackHandler}
        variant="outline"
        className="max-md:w-full md:flex-1"
      >
        Back
      </Button>
      <Button
        onClick={() => onContinue && onContinue()}
        type="submit"
        className="max-md:w-full md:flex-1"
      >
        Continue
      </Button>
    </div>
  );
};

export default FormButtons;
