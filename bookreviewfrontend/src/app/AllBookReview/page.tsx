"use client"
import React from 'react'
import BookReviewCard from '@/components/BookReview/BookReviewComponent'
import { useQuery } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';
import { allBookReview } from '@/Hooks/Query/BookReviewQuery'
const Page = () => {

  const { isLoaded, isSignedIn, user } = useUser();
const {isLoading,data}= useQuery({ queryKey: ['allBookReview'], queryFn: allBookReview })
  if (!isLoaded || !isSignedIn) {
    return <div>Not signed in.</div>;
  }
if(isLoading){
  return <div>
    Loading .....
  </div>
}

  return (
    <div className='flex flex-row justify-evenly flex-wrap'>
 {data.map((e: any) => (
  <BookReviewCard key={e.reviewId} user={e.user} reviewId={e.reviewId} userId={user.id} likeCount={e.likeCount}  bookDsc={e.bookDsc} bookImageUrl={e.bookImageUrl} bookName={e.bookName} bookType={e.bookType} isValidated={e.isValidated} presentAtLibrary={e.presentAtLibrary} referenceNumber={e.referenceNumber} /> // Add unique key
))}
        </div>
  )
}

export default Page
