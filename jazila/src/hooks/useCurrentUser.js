import { userClient } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

export function useCurrentUser(){
    const{
        data:currentUser,
        isLoading,
        error,
    } =useQuery(["me"], userClient.me,{
        retry:false,
    });
    return{currentUser,isLoading,error}
}