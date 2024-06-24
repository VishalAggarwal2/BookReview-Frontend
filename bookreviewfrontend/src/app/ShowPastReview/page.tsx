"use client"
import { allBookReviewUserQuery } from '@/Hooks/Mutations/BookReviewMutation'
import BookReviewCard from '@/components/BookReview/BookReviewComponent'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const  Page = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  
  if (!isLoaded || !isSignedIn) {
    return <div>Not signed in.</div>;
  }

  const { data, isLoading, error } = allBookReviewUserQuery(user.id);
  
  return (
    <div className='flex flex-row justify-evenly flex-wrap'>
{isLoading?<>
<h1>
  loading......
</h1>
</>:<>
{data.map((e: any) => (
  <BookReviewCard user={e.user} key={e.reviewId}  reviewId={e.reviewId} bookDsc={e.bookDsc} bookImageUrl={e.bookImageUrl} bookName={e.bookName} bookType={e.bookType} isValidated={e.isValidated} userId={user.id} presentAtLibrary={e.presentAtLibrary} likeCount={e.likeCount} referenceNumber={e.referenceNumber} /> // Add unique key
))}
</>
}
</div>
  )
}
export default  Page  
