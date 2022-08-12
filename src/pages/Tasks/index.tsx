import { useEffect, useState } from "react"
import { useAuth } from './../../contexts/AuthContext';
import { useNavigate } from "react-router-dom"
import { Button, Divider, Flex, Grid, Text, Spacer } from '@chakra-ui/react';
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { TaskCard } from "../../components/TaskCard";

import { db } from "../../services/FirebaseConfig";
import { collection, getDocs, doc, DocumentData } from "firebase/firestore";

// export interface TaskProps {
//   title: string
//   isCompleted: boolean
// }

export const Tasks = ({ setIsAuth }: any) => {
  const { logout, currentUser } = useAuth()
  const [tasks, setTasks] = useState<DocumentData[]>([])
  const [userInfo, setUserInfo] = useState({})

  const navigate = useNavigate()

  const signUserOut = () => {
    logout()
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate('/')
      });
  }


  const getTasks = async () => {
    const userCollectionRef = collection(db, 'user')
    const data = await getDocs(userCollectionRef)

    const searchUserUid = data.docs.map((doc) => (doc.get('uid'))).filter((uid) => uid == currentUser.uid)
    const searchUserID = data.docs
      .map(doc => ({ ...doc.data(), id: doc.id, uid: doc.get('uid') }))
      .filter((user) => user.uid == searchUserUid && user.id)

    const { id, uid } = searchUserID[0]

    const tasksCollectionRef = collection(db, `user/${id}/tasks`)
    const tasks = await getDocs(tasksCollectionRef)
    const tasksData = (tasks.docs.map((doc) => (doc.data())))

    setTasks(tasksData)
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
                <Button onClick={getTasks}>Oi</Button>

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
                  {tasks.length > 0 && tasks.map((task) => (
                    <TaskCard
                      title={task.title}
                    />
                  ))}
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

