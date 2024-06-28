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
    <div className='sticky top-0 z-50 flex flex-row justify-between bg-red-950 text-white p-7 align-middle'>
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
            <Link className=' bg-white text-red-950 p-1' style={{borderRadius: "10px"}} href={"/about"}>About</Link>
            <Link className=' bg-white text-red-950 p-1' style={{borderRadius: "10px"}} href={"/AddBookReview"}>AddBookReview</Link>
            <Link className=' bg-white text-red-950 p-1' style={{borderRadius: "10px"}} href={"/ShowPastReview"}>ShowPastReview</Link>
            <Link className=' bg-white text-red-950 p-1' style={{borderRadius: "10px"}} href={"/AllBookReview"}>AllBookReview</Link>
            <Link className=' bg-white text-red-950 p-1' style={{borderRadius: "10px"}} href={"/developers"}>Developer</Link>
            <Link className=' bg-white text-red-950 p-1' style={{borderRadius: "10px"}} href={"/Guide"}>Guide</Link>

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
