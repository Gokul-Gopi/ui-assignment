import z from "zod";
import { COUNTRY_CODES } from "./helpers";

const phoneObject = z.object({
  countryCode: z.string().min(1, { message: "Country code is required" }),
  number: z.string().min(1, { message: "Phone number is required" }),
});

export const phoneNumberSchema = z.object({
  phone: phoneObject.refine(
    (data) => {
      const expectedLength = COUNTRY_CODES.find(
        (country) => country.value === data.countryCode,
      )?.length;

      if (expectedLength == null) return true;
      return data.number.replace(/\D/g, "").length === expectedLength;
    },
    {
      message:
        "Phone number must be the correct number of digits for the selected country",
      path: ["number"],
    },
  ),
});

export type TPhoneNumberSchema = z.infer<typeof phoneNumberSchema>;
