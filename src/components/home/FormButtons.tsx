import { Button } from "../ui/Button";

const FormButtons = () => {
  return (
    <div className="mx-auto mt-auto flex w-full items-center justify-center gap-4 pt-10 max-md:flex-col-reverse md:max-w-[90%]">
      <Button variant="outline" className="max-md:w-full md:flex-1">
        Back
      </Button>
      <Button type="submit" className="max-md:w-full md:flex-1">
        Continue
      </Button>
    </div>
  );
};

export default FormButtons;
