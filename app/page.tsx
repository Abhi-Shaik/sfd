"use client";
import Image from "next/image";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { signOut } from "aws-amplify/auth"
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

Amplify.configure(outputs, { 
  ssr: true // <-- Add this line
});
export default function Home() {
  async function handleSignOut() {
    await signOut()
  }
  return (
    <Authenticator>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        hi
        <button type="button" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </Authenticator>
  );
}
