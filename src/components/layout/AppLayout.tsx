import artboard from "../../../public/art-board.svg";
import Image from "next/image";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex max-lg:flex-col min-h-screen pt-20 pl-20 pb-12 pr-12 max-lg:pt-16 max-md:px-6 max-lg:px-12 bg-background">
      <aside className="lg:flex-1 flex flex-col justify-between">
        <header className="flex flex-col gap-3 lg:gap-4 lg:mr-10 max-lg:mb-10">
          <p className="text-xl lg:text-2xl font-light max-lg:text-center">
            Let's get started
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold max-lg:text-center">
            Create your account
          </h1>
          <p className="max-lg:text-sm max-lg:text-center">
            Follow the steps to create your account
          </p>
        </header>

        <Image
          src={artboard}
          alt="artboard"
          className="mt-auto mb-5 w-full max-lg:hidden"
        />
      </aside>

      <main className="flex-1 bg-background max-lg:flex max-lg:flex-col">
        <div className="bg-white py-10 px-14 flex-1 rounded-2xl shadow-card h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
