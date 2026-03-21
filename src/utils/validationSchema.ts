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

export const otpSchema = z.object({
  otp: z.string().length(4, { message: "OTP must be 4 digits" }),
});

export type TOTPSchema = z.infer<typeof otpSchema>;

export const usernameSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
});

export type TUsernameSchema = z.infer<typeof usernameSchema>;

export const createPasswordSchema = z
  .object({
    password: z
      .string({ message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(6, { message: "Passwords do not match" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TCreatePasswordSchema = z.infer<typeof createPasswordSchema>;
