import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { getCurrentUser } from "aws-amplify/auth/server";
import outputs from "@/amplify_outputs.json";
import {cookies} from 'next/headers' 

export const { runWithAmplifyServerContext } = createServerRunner({
    config: outputs,
      
  runtimeOptions: {
    cookies: {
      domain: 'main.d2w33k3u7l8ohq.amplifyapp.com', // making cookies available to all subdomains
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    }
  }
    cookies: {
        httpOnly: true
    }
})

export async function GetAuthCurrentUserServer() {
    try{
         const currentUser = await runWithAmplifyServerContext({
            nextServerContext: { cookies },
            operation: (context) => getCurrentUser(context)
         })
         return currentUser
    }catch(err){
        console.log(err)
    }
}