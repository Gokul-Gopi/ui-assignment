import check from "../../../public/check-icon.svg";
import { useState } from "react";
import FormHeader from "./FormHeader";
import { BriefcaseBusiness, UserRound } from "lucide-react";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import FormButtons from "./FormButtons";

const options = [
  {
    id: 1,
    icon: <UserRound size="20" />,
    name: "Personal",
  },
  {
    id: 2,
    icon: <BriefcaseBusiness size="20" />,
    name: "Business",
  },
];

const SelectAccountType = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);

  return (
    <div>
      <FormHeader
        title={
          <p className="font-normal">
            To join us tell us{" "}
            <strong className="font-medium">what type of account</strong> you
            are opening
          </p>
        }
      />

      <div className="flex flex-col gap-4">
        {options.map((el) => (
          <div key={el.id}>
            <div
              role="button"
              onClick={() => setSelectedOption(el.id)}
              className={cn(
                "relative flex shadow-card items-center gap-5 border border-[#D9E0E6] rounded-2xl py-6 px-8 cursor-pointer",
                {
                  "border-primary text-primary": selectedOption === el.id,
                },
              )}
            >
              <div className={cn({ "text-primary": selectedOption === el.id })}>
                {el.icon}
              </div>
              <span className="font-medium">{el.name}</span>
              {selectedOption === el.id && (
                <Image
                  src={check}
                  alt="check"
                  className="size-7 absolute right-5 top-1/2 -translate-y-1/2"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <FormButtons />
    </div>
  );
};

export default SelectAccountType;
