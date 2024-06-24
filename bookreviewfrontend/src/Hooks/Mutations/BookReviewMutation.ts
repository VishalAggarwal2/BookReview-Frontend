import { addBookReviewQuery } from "@/GraphQl/BookReview/bookReviewquery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getUserBlogReview } from "@/GraphQl/BookReview/bookReviewquery";
import { useQuery } from "@tanstack/react-query"
const postReview = async (data: any) => {
  console.log(data);
  console.log("called here");
  const obj= {

      "bookDsc": data.bookDsc,
      "bookImageUrl": data.bookImage,
      "bookName": data.bookName,
      "bookReview": data.bookReview,
      "bookType": data.bookType,
      "presentAtLibrary": data.presentAtLibrary,
      "referenceNumber": data.bookReferenceNumber,
      "userId": data.userId
    
  }

  const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql",{query:`${addBookReviewQuery}`, variables:{
    bookReviewInput:obj
  
  } })
  console.log(response);
  return [];
};


export const useAddBookReviewMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['userBookReview'] });
    },
  });
};



const getAllBookReviewofUser=async(userId:string)=>{
    console.log("*************************");
const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql",{query:`${getUserBlogReview}`, variables:{
    userId:userId
  
  } })
console.log(response);
return response.data.data.allBookReviewByUserId||[];

}

export const allBookReviewUserQuery=(userId:string)=>{
return useQuery({ queryKey: ['userBookReview'], queryFn: ()=>getAllBookReviewofUser(userId) })
}




