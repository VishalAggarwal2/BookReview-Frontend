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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClientall}>
      <ClerkProvider>
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
