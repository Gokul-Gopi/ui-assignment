import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import usaFlag from "../../public/usa-flag.svg";
import ukFlag from "../../public/uk-flag.svg";
import indiaFlag from "../../public/india-flag.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COUNTRY_CODES = [
  {
    value: "+1",
    label: "+1",
    flag: usaFlag.src,
    length: 10,
  },
  {
    value: "+44",
    label: "+44",
    flag: ukFlag.src,
    length: 11,
  },
  {
    value: "+91",
    label: "+91",
    flag: indiaFlag.src,
    length: 10,
  },
] as const;
