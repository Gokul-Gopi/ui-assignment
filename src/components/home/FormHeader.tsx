interface IFormHeaderProps {
  title: React.ReactNode;
}

const FormHeader = ({ title }: IFormHeaderProps) => {
  return (
    <h2 className="text-xl lg:text-2xl font-normal max-lg:text-balance max-lg:text-center max-lg:mx-auto mb-12 max-w-md">
      {title}
    </h2>
  );
};

export default FormHeader;
