"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { useQuery } from '@tanstack/react-query';
import { isInLibraryTeam } from '@/Hooks/Query/UserQuery';
import { allInvalidBookReview } from '@/Hooks/Query/BookReviewQuery';
import BookReviewCard from '@/components/BookReview/BookReviewComponent';
import BookReviewCardLibraryTeam from '@/components/BookReview/BookReviewCardLibraryTeam';
function Page() {
    const { isLoaded, isSignedIn, user } = useUser();
  
    if (!isLoaded || !isSignedIn) {
      return <div>Not signed in.</div>;
    }

    const query = useQuery({ queryKey: ['isInlibraryTeam'], queryFn: ()=>{return isInLibraryTeam(user.id)} })
   const query2 = useQuery({ queryKey: ['allInvalidBooreview'], queryFn:allInvalidBookReview} )

    if (query.isLoading) {
        return <div>Loading...</div>;
      }

   if(!query.data){
    return <div>Not Authenticated</div>
   }

  
   if (query2.isLoading) {
    return <div>Loading...</div>;
  }
  if(query2.error){
    return <div> error</div>
  }
  return (
    <div className='flex flex-row flex-wrap gap-4'>
{
query2.data.map((e:any)=>{
  return   <BookReviewCardLibraryTeam key={e.reviewId} user={e.user} reviewId={e.reviewId} userId={user.id} likeCount={e.likeCount}  bookDsc={e.bookDsc} bookImageUrl={e.bookImageUrl} bookName={e.bookName} bookType={e.bookType} isValidated={e.isValidated} presentAtLibrary={e.presentAtLibrary} referenceNumber={e.referenceNumber} /> // Add unique key
})
}
    </div>
  )
}
export default Page