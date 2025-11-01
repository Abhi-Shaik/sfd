'use client';
import {withAuthenticator} from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { AuthUser } from 'aws-amplify/auth';
// import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

const Signup = ({user} : {user?: AuthUser}) => {
    useEffect(() => {
        if(user){
            redirect('/');
        }   
    });
    return null;
};

export default withAuthenticator(Signup);