import artboard from "../../../public/art-board.svg";
import Image from "next/image";
import { Progress } from "@/components/ui/Progress";
import useOnBoardingStore from "@/store";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const step = useOnBoardingStore((state) => state.step);

  const progress = (step / 5) * 100;

  return (
    <div className="bg-background flex min-h-screen pt-20 pr-12 pb-12 pl-20 max-lg:flex-col max-lg:px-12 max-lg:pt-16 max-md:px-6">
      <aside className="flex flex-col justify-between lg:flex-1">
        <header className="flex flex-col gap-3 max-lg:mb-10 lg:mr-10 lg:gap-4">
          <p className="text-xl font-light max-lg:text-center lg:text-2xl">
            Let&apos;s get started
          </p>
          <h1 className="text-4xl font-bold max-lg:text-center lg:text-5xl">
            Create your account
          </h1>
          <p className="max-lg:text-center max-lg:text-sm">
            Follow the steps to create your account
          </p>
        </header>

        <Image
          src={artboard}
          alt="artboard"
          className="mt-auto mb-5 w-full max-lg:hidden"
        />
      </aside>

      <main className="bg-background flex-1 max-lg:flex max-lg:flex-col">
        <Progress
          value={progress}
          className="mx-auto mb-1 max-w-[80%] rounded-full"
        />
        <div className="shadow-card flex h-full flex-1 flex-col rounded-2xl bg-white px-6 pt-10 pb-14 md:px-14">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
