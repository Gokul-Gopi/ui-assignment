import { Button } from "../ui/Button";

const FormButtons = () => {
  return (
    <div className="mt-auto flex items-center justify-center gap-4 pt-10 max-md:flex-col-reverse">
      <Button variant="outline" className="w-full sm:w-62.5">
        Back
      </Button>
      <Button className="w-full sm:w-62.5">Continue</Button>
    </div>
  );
};

export default FormButtons;
