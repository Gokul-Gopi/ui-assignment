import { Button } from "../ui/Button";

const FormButtons = () => {
  return (
    <div className="flex max-md:flex-col-reverse items-center justify-center gap-4 pt-10 mt-auto">
      <Button variant="outline" className="w-full sm:w-62.5">
        Back
      </Button>
      <Button className="w-full sm:w-62.5">Continue</Button>
    </div>
  );
};

export default FormButtons;
