import { useContext, useEffect, useState } from "react"
import { useAuth } from './../../contexts/AuthContext';
import { useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react';
import { Loading } from "../../components/Loading";



export const Tasks = ({ setIsAuth }: any) => {
  const { logout, currentUser } = useAuth()

  const navigate = useNavigate()
  const signUserOut = () => {
    logout()
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate('/')
      });
  };

  return (
    <>
      {currentUser
        ? (
          <div>
            <Button onClick={signUserOut}>Logout</Button>
            <p>{currentUser && currentUser.displayName}</p>
          </div>
        )
        :
        <Loading />
      }

    </>

  )
}

