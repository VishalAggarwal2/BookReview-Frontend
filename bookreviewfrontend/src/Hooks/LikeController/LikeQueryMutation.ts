import { Likequery, deleteLikeQuery } from "@/GraphQl/Like/LikeQuery";
import axios from "axios";
import { queryClientall } from "@/app/queryClient";
import {
    useMutation,
  } from '@tanstack/react-query'

const addLike=async({reviewId,userId}:any)=>{
    console.log("kkkkkkkkkkkkkkkkkkkkkkk");
    console.log("book review id is ",reviewId)
    console.log("userId review id is ",userId)
const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql",{query:`${Likequery}`, variables:{
    bookReviewId:reviewId,
    userId:userId  
  } })
console.log(response);

console.log("------------------------");
}


const deleteLike=async({reviewId,userId}:any)=>{
    console.log("book review id is ",reviewId)
    console.log("userId review id is ",userId)
const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql",{query:`${deleteLikeQuery}`, variables:{
    bookReviewId:reviewId,
    userId:userId  
  } })
console.log(response);

console.log("------------------------");
}



export const addLikeMutation=()=>{
    return useMutation({
        mutationFn: addLike,
        onSuccess: () => {
          queryClientall.invalidateQueries({ queryKey: ['userBookReview'] })
          queryClientall.invalidateQueries({ queryKey: ['allBookReview'] })
        },
      })
      
}





export const deleteLikeMutation=()=>{
    return useMutation({
        mutationFn: deleteLike,
        onSuccess: () => {
          queryClientall.invalidateQueries({ queryKey: ['userBookReview'] })
          queryClientall.invalidateQueries({ queryKey: ['allBookReview'] })
        },
      })
}