import "@/styles/globals.css";
import AppLayout from "@/components/layout/AppLayout";
import { Toaster } from "@/components/ui/sonner";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
        <Toaster richColors theme="light" closeButton />
      </AppLayout>
    </>
  );
}
