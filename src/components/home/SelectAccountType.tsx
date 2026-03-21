import check from "../../../public/check-icon.svg";
import FormHeader from "./FormHeader";
import { BriefcaseBusiness, UserRound } from "lucide-react";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import FormButtons from "./FormButtons";
import useOnBoardingStore from "@/store";

const options = [
  {
    id: "personal",
    icon: <UserRound size="20" />,
    name: "Personal",
  },
  {
    id: "business",
    icon: <BriefcaseBusiness size="20" />,
    name: "Business",
  },
] as const;

const SelectAccountType = () => {
  const step = useOnBoardingStore((state) => state.step);
  const setStep = useOnBoardingStore((state) => state.setStep);
  const accountType = useOnBoardingStore((state) => state.accountType);
  const setOnBoardingData = useOnBoardingStore(
    (state) => state.setOnBoardingData,
  );

  return (
    <div className="flex flex-1 flex-col">
      <FormHeader
        title={
          <p className="font-normal!">
            To join us tell us{" "}
            <strong className="font-medium">what type of account</strong> you
            are opening
          </p>
        }
      />

      <div className="flex flex-col gap-4 xl:pr-20">
        {options.map((el) => (
          <div key={el.id}>
            <div
              role="button"
              onClick={() =>
                setOnBoardingData({ accountType: { id: el.id, name: el.name } })
              }
              className={cn(
                "shadow-card border-border relative flex cursor-pointer items-center gap-5 rounded-2xl border px-8 py-6",
                {
                  "border-primary text-primary": accountType.id === el.id,
                },
              )}
            >
              <div className={cn({ "text-primary": accountType.id === el.id })}>
                {el.icon}
              </div>
              <span className="font-medium">{el.name}</span>
              {accountType.id === el.id && (
                <Image
                  src={check}
                  alt="check"
                  className="absolute top-1/2 right-5 size-7 -translate-y-1/2"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <FormButtons onContinue={() => setStep(step + 1)} />
    </div>
  );
};

export default SelectAccountType;
