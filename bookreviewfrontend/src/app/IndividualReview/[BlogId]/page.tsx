"use client"
import BookReviewCard from '@/components/BookReview/BookReviewComponent'
import React from 'react'
import Comments from '@/components/IndividualBookComponent/Comments'
import CommentForm from '@/components/IndividualBookComponent/InputComment'
import { getCommentQuery } from '@/Hooks/CommentController/commentMuttainandQuery'
import { useUser } from '@clerk/nextjs'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getParticularbookByreviewId } from '@/Hooks/Query/BookReviewQuery'
const Page = () => {
  const para=useParams();

  const id = para.BlogId;
  const { isLoaded, isSignedIn, user } = useUser();
  const reviewIdString = Array.isArray(id) ? id[0] : id;
  const reviewIdNumber = parseInt(reviewIdString, 10);
  const query2 = useQuery({ queryKey: ['particularBookbyId'], queryFn:()=>{return getParticularbookByreviewId(reviewIdNumber)}} )

  const query = getCommentQuery(reviewIdNumber);
  if (query2.isLoading) {
    return <div>Loading...</div>;
  }

if(!query2.data){
return <div>Not Authenticated</div>
}



  
  if (!isLoaded || !isSignedIn) {
    return <div>Not signed in.</div>;
  }


  return (
    <div className='flex flex-col m-auto justify-evenly'>

        <BookReviewCard key={query2.data.reviewId} user={query2.data.user} reviewId={query2.data.reviewId} userId={user.id} likeCount={query2.data.likeCount}  bookDsc={query2.data.bookDsc} bookImageUrl={query2.data.bookImageUrl} bookName={query2.data.bookName} bookType={query2.data.bookType} isValidated={query2.data.isValidated} presentAtLibrary={query2.data.presentAtLibrary} referenceNumber={query2.data.referenceNumber} bookReview={query2.data.bookReview} />         <CommentForm userId={user.id} bookReviewId={reviewIdNumber}></CommentForm>
<div className=' w-1/2 m-auto sm-md:w-2/3' >


    <h1 className=' text-4xl'>Comments </h1>
   {
    query.isLoading?<div>Loading....</div>:<div>
      {
        query.data?.map((e:any)=>{
          return <Comments user={e.user} message={e.message||""}></Comments>
        })
      }
    </div>
   }

</div>
    </div>
  )
}

export default Page
