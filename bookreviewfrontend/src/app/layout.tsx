"use client";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import './globals.css';
import NavBar from '../components/NavBar/NavBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientall } from './queryClient';

const clerkConfig = {
  apiKey: 'pk_test_d29ya2FibGUtbW9sZS02Mi5jbGVyay5hY2NvdW50cy5kZXYk',
  // other configuration options as needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClientall}>
      <ClerkProvider {...clerkConfig}>
        <html lang="en">
          <body>
            <NavBar />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </body>
        </html>
      </ClerkProvider>
    </QueryClientProvider>
  );
}
