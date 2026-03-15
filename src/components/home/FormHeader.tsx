interface IFormHeaderProps {
  title: React.ReactNode;
}

const FormHeader = ({ title }: IFormHeaderProps) => {
  return (
    <h2 className="mb-12 max-w-md text-xl font-medium max-lg:mx-auto max-lg:text-center max-lg:text-balance lg:text-2xl">
      {title}
    </h2>
  );
};

export default FormHeader;
