import { create } from "zustand";

interface IOnBoardingStore {
  accountType: {
    id: string;
    name: string;
  };
  phoneNumber: {
    countryCode: string;
    number: string;
  };
  username: {
    firstName: string;
    lastName: string;
  };
  step: number;
  setStep: (step: number) => void;
  setOnBoardingData: (data: Partial<IOnBoardingStore>) => void;
}

const useOnBoardingStore = create<IOnBoardingStore>((set) => ({
  accountType: {
    id: "personal",
    name: "Personal",
  },
  phoneNumber: {
    countryCode: "+91",
    number: "",
  },
  username: {
    firstName: "",
    lastName: "",
  },
  step: 1,
  setStep: (step) => set({ step }),
  setOnBoardingData: (data) => set({ ...data }),
}));

export default useOnBoardingStore;
