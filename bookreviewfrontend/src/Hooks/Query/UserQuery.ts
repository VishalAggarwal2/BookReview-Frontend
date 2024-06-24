import axios from "axios"
import { isLibraryTeamQuery } from "@/GraphQl/User/userQuery"
export const isInLibraryTeam=async(userId:string)=>{
    try{
        const response = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql",{query:`${isLibraryTeamQuery}`, variables:{
            userId:userId
          
          } })
return response.data.data.isInLibraryTeam||false;


    }catch(e){
        console.log("error");
  return false;
    }
}