import artboard from "../../../public/art-board.svg";
import Image from "next/image";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-dvh pt-20 pl-20 pb-12 pr-12 bg-background">
      <aside className="flex-1 flex flex-col gap-4">
        <p className="text-2xl font-light">Let's get started</p>
        <h1 className="text-5xl font-bold">Create your account</h1>
        <p>Follow the steps to create your account</p>
        <Image src={artboard} alt="artboard" className="mt-auto mb-5 w-full" />
      </aside>

      <main className="flex-1 bg-background">
        <div className="bg-white p-10 rounded-2xl shadow-card h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
