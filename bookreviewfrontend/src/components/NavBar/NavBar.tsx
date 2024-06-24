import React from 'react';
import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
  } from '@clerk/nextjs';
import NavbarButton from '../NavBarButton/NavbarButton';

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between bg-black text-white p-7 align-middle'>
      <h1 className='text-2xl'>
        <Link href={"/"}>
          BookReview
        </Link>  
      </h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className='flex flex-row items-center gap-3 sm-md:hidden'>
            <Link href={"/about"}>About</Link>
            <Link href={"/AddBookReview"}>AddBookReview</Link>
            <Link href={"/ShowPastReview"}>ShowPastReview</Link>
            <Link href={"/AllBookReview"}>AllBookReview</Link>
            <UserButton />
          </div>
          <div className='block lg:hidden'>
            <NavbarButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default NavBar;
