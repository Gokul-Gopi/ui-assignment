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
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <div className="flex flex-1 flex-col xl:pr-20">
      <FormHeader
        title={
          <p className="font-normal!">
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
                "shadow-card border-border relative flex cursor-pointer items-center gap-5 rounded-2xl border px-8 py-6",
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
                  className="absolute top-1/2 right-5 size-7 -translate-y-1/2"
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
