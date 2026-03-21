import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ShieldCheck } from "lucide-react";
import checkIcon from "../../../public/check-icon2.svg";
import Image from "next/image";
import useOnBoardingStore from "@/store";

interface IAccountSummary {
  accountType: string;
  email: string;
  name: string;
  mobile: string;
}

interface ISummaryRowProps {
  label: string;
  value: string;
}

const SummaryRow = ({ label, value }: ISummaryRowProps) => {
  return (
    <div className="flex items-start justify-between gap-4 text-sm">
      <span className="text-muted-foreground shrink-0">{label}</span>
      <span className="text-foreground text-right font-medium">{value}</span>
    </div>
  );
};

type AccountSuccessDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  summary?: Partial<IAccountSummary>;
};

const AccountSuccessDialog = ({
  open,
  onOpenChange,
  summary,
}: AccountSuccessDialogProps) => {
  const accountType = useOnBoardingStore((state) => state.accountType);
  const email = "demomail@google.com";
  const name = useOnBoardingStore((state) => state.username);
  const mobile = useOnBoardingStore((state) => state.phoneNumber);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="z-999 gap-6 rounded-2xl border-0 px-6 py-10 text-center shadow-lg sm:max-w-120"
      >
        <div className="flex flex-col items-center gap-3">
          <Image src={checkIcon} alt="Check Icon" width={64} height={64} />

          <DialogHeader className="gap-2 text-center sm:text-center">
            <DialogTitle className="text-2xl font-semibold tracking-tight">
              You&apos;re all set!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Here&apos;s a quick summary of your account details
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="space-y-3 rounded-xl bg-neutral-200/30 px-4 py-4 text-left">
          <SummaryRow label="Account Type" value={accountType.name} />
          <SummaryRow label="Email" value={email} />
          <SummaryRow
            label="Name"
            value={`${name.firstName} ${name.lastName}`}
          />
          <SummaryRow
            label="Mobile Number"
            value={`${mobile.countryCode} ${mobile.number}`}
          />
        </div>

        <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
          <ShieldCheck
            className="size-5 shrink-0 -translate-y-0.5 text-emerald-600"
            aria-hidden
          />
          <span>Your account is secured with bank-grade security</span>
        </p>

        <Button type="button" className="mx-auto w-full max-w-62.5">
          Go To Dashboard
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AccountSuccessDialog;
