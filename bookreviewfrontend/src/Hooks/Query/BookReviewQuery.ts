// import { getUserBlogReview } from "@/GraphQl/BookReview/bookReviewquery";
// import { useQuery } from "@tanstack/react-query"
import { InvalidToValidQuery, allBookReviewQuery, bookNotInLibraryquery, bookReviewById, invalidBookReviewQuery } from "@/GraphQl/BookReview/bookReviewquery";
import { queryClientall } from "@/app/queryClient";
import axios from "axios"
export const allInvalidBookReview=async()=>{
    const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql",{query:`${invalidBookReviewQuery}` });
    console.log(response);
return response.data.data.allInValidBookReview||[];
}


export const InvalidToValidReview=async(reviewId:any,userId:any)=>{
    console.log(userId);
    console.log(reviewId);
    const obj={
        userId:userId,
        reviewId:reviewId
    }
    console.log(obj);
    const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql", {
        query: `${InvalidToValidQuery}`,
        variables: {
          userId,
          reviewId
        }
      });
    console.log(response);
    queryClientall.invalidateQueries({ queryKey: ['allInvalidBooreview'] })
alert("validated succ....");

}
export const allBookReview=async()=>{
  try{
    console.log("********************");
    const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql", {
        query: `${allBookReviewQuery}`,
      });
    console.log(response);
  console.log("********************");

    return response.data.data.allBookReview||[];
  }catch(e){
console.log("error in all book review");
console.log(e);
return [];

  }
  
}

export const getParticularbookByreviewId=async(reviewId:any)=>{
  console.log("-----------------------------------");
  const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql", {
      query: `${bookReviewById}`,
      variables: {
        reviewId
      }
    });
  console.log(response);
console.log("++++++++++++++++++++++++++++")

  return response.data.data.getParticularBookReviewId||[];
}



// all books that is not in library
export const notInLibrary=async()=>{
  console.log("-----------------------------------");
  const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql", {
      query: `${bookNotInLibraryquery}`,
    });
  console.log(response);
console.log("++++++++++++++++++++++++++++")
  return response.data.data.NotInLibrary||[];
}