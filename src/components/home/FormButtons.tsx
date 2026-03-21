import { Button } from "../ui/Button";

const FormButtons = () => {
  return (
    <div className="mx-auto mt-auto flex w-full max-w-[90%] items-center justify-center gap-4 pt-10 max-md:flex-col-reverse">
      <Button variant="outline" className="flex-1">
        Back
      </Button>
      <Button type="submit" className="flex-1">
        Continue
      </Button>
    </div>
  );
};

export default FormButtons;
