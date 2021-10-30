import { useState } from 'react';
import { SignIn } from './components/signIn';
import { SignUp } from './components/signUp';

const Authorization = () => {
  const [authMode, setAuthMode] = useState('signIn');

  return (
    <>
      {authMode === "signIn" && (
        <SignIn />
      )}
      {authMode === "signUp" && (
        <SignUp />
      )}
    </>
  )
}

export default Authorization;