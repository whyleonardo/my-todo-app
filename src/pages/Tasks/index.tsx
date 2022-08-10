import { useContext, useEffect, useState } from "react"
import { useAuth } from './../../contexts/AuthContext';
import { Button } from '@chakra-ui/react';



export const Tasks = ({ setIsAuth }: any) => {
  const { logout } = useAuth()

  const signUserOut = () => {
    logout()
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/";
      });
  };

  return (
    <>

      <Button onClick={signUserOut}>Logout</Button>

    </>

  )
}

