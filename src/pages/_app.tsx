// src/pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";

import "regenerator-runtime/runtime";

const MyApp: AppType = ({
  Component,
  pageProps: {...pageProps },
}) => {
  // const supportedChainIds = [1, 4, 137];

  // const connectors = {
  //   injected: {},
  // };
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
