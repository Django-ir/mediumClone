import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../redux/store";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
