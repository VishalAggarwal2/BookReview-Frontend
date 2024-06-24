import { addCommentQuery, getBookReviewCommentQuery } from "@/GraphQl/Comment/query";
import { queryClientall } from "@/app/queryClient";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import axios from "axios";
const getAllCommentofReview=async(bookReviewId:Number)=>{
    console.log("*************************");
const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql",{query:`${getBookReviewCommentQuery}`, variables:{
    bookReviewId:bookReviewId
  
  } })
console.log(response);
console.log("*************************");
return response.data.data.getParticularBookReviewComment||[];

}



export const getCommentQuery=(bookReviewId:Number)=>{
  console.log("hello from the comment",bookReviewId);
    return useQuery({ queryKey: ['allBookComment'], queryFn: ()=>getAllCommentofReview(bookReviewId) })
}


const addComment=async({bookReviewId,message,userId}:any)=>{
    console.log("---------------------------");
const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql",{query:`${addCommentQuery}`, variables:{
    bookReviewId:bookReviewId,
    message:message,
    userId:userId  
  } })
console.log(response);
console.log("------------------------");
}


// const queryClient = new QueryClient()


export const addCommentMutation=()=>{
    return useMutation({
        mutationFn: addComment,
        onSuccess: () => {
          // Invalidate and refetch
          queryClientall.invalidateQueries({ queryKey: ['allBookComment'] })
        },
      })
}
