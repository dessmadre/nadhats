import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../lib/queryClient';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
