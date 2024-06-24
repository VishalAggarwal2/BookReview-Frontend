import React from 'react'
import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
  } from '@clerk/nextjs'

const NavBar = () => {


  return (
    <div className='flex flex-row justify-between bg-black text-white p-7 align-middle'>
      <h1 className=' text-2xl'>
      <Link href={"/"}>
      BookReview
      </Link>  
      </h1>
      <div>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div style={{display:"flex",flex:"row",alignItems:"center",gap:"3rem"}}>
<Link href={"/about"}>About</Link>
<Link href={"/AddBookReview"}>AddBookReview</Link>
<Link href={"/ShowPastReview"}>ShowPastReview</Link>
<Link href={"/AllBookReview"}>AllBookReview</Link>

              
            <UserButton />
            </div>
          
          </SignedIn>
      </div>
    </div>
  )
}

export default NavBar