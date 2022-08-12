import { useContext, useEffect, useState } from "react"
import { useAuth } from './../../contexts/AuthContext';
import { useNavigate } from "react-router-dom"
import { Button, Divider, Flex, Grid, Text, Spacer } from '@chakra-ui/react';
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { TaskCard } from "../../components/TaskCard";
import { db } from "../../services/FirebaseConfig";

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
  }

  const handleAddNewTask = () => { }

  return (
    <>
      {
        currentUser
          ? (
            <>
              < Header
                signUserOut={signUserOut}
              />

              <Flex direction='column' h='150px' justify='center' m='1rem' px='2rem' >
                <Text color='brand.400' fontSize='1.5rem'>
                  Welcome, <Text as='span' fontWeight='bold'>{currentUser.displayName}!</Text>
                </Text>
                <Spacer />
                <Text as='h1' fontWeight='bold' color='brand.400' fontSize='2rem'>Tasks</Text>
                <Divider orientation='horizontal' />
              </Flex>

              <Flex flexDirection='column' px='2rem' pb='1rem'>
                <Button
                  alignSelf='end'
                  bg='brand.400'
                  filter='auto'
                  color='brand.100'
                  _hover={{ brightness: '110%' }}
                  w='8rem'
                >
                  Add New Task
                </Button>
                <Grid pt='1rem' templateColumns='repeat(5, 1fr)' gap='2rem'>
                  <TaskCard />
                </Grid>
              </Flex>
            </>
          )
          :
          <Loading />
      }
    </>
  )
}

