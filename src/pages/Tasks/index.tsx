import { useEffect, useState } from "react"
import { useAuth } from './../../contexts/AuthContext';
import { useNavigate } from "react-router-dom"
import {
  Button, Divider, Flex, Grid, Text, Spacer, useDisclosure
} from '@chakra-ui/react';

import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { TaskCard } from "../../components/TaskCard";

import { db } from "../../services/FirebaseConfig";
import { collection, getDocs, addDoc, DocumentData, CollectionReference, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { ModalNewTask } from '../../components/ModalNewTask/index';
import { useColorModeValue } from '@chakra-ui/react';

interface TasksInfoProps {
  title: string
  description: string
  isCompleted: boolean
}

export const Tasks = ({ setIsAuth }: any) => {
  const [tasks, setTasks] = useState<DocumentData[]>([])
  const [newTaskInfo, setNewTaskInfo] = useState<TasksInfoProps>({
    title: '',
    description: '',
    isCompleted: false
  })
  const [tasksCollectionRef, setTasksCollectionRef] = useState<CollectionReference<DocumentData>>({} as CollectionReference<DocumentData>)
  const [userID, setUserID] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logout, currentUser } = useAuth()

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskInfo({
      ...newTaskInfo,
      [e.target.name]: e.target.value
    })
  }

  const userCollectionRef = collection(db, 'user')

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
    const data = await getDocs(userCollectionRef)

    if (currentUser) {
      const searchUserUid = data.docs.map((doc) => (doc.get('uid'))).filter((uid) => uid == currentUser.uid)

      const searchUserID = data.docs
        .map(doc => ({ ...doc.data(), id: doc.id, uid: doc.get('uid') }))
        .filter((user) => user.uid == searchUserUid && user.id)

      const { id } = searchUserID[0]

      const tasksCollectionRef = collection(db, `user/${id}/tasks`)
      const tasks = await getDocs(tasksCollectionRef)
      const tasksData = tasks.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

      setUserID(id)
      setTasksCollectionRef(tasksCollectionRef)
      setTasks(tasksData)
    }
  }

  const handleCreateNewTask = async () => {
    await addDoc(tasksCollectionRef, {
      title: newTaskInfo.title,
      description: newTaskInfo.description,
      isCompleted: newTaskInfo.isCompleted
    })

    setNewTaskInfo({
      title: '',
      description: '',
      isCompleted: false
    })

    onClose()
    getTasks()
  }

  const handleCompleteTask = async (id: string) => {
    const taskRef = doc(db, `user/${userID}/tasks/${id}`)
    const newField = { isCompleted: true }

    await updateDoc(taskRef, newField)
    getTasks()
  }

  const handleDeleteTask = async (id: string) => {
    const taskRef = doc(db, `user/${userID}/tasks/${id}`)
    await deleteDoc(taskRef).then(() => { getTasks() })

  }


  const titleColor = useColorModeValue('brand.400', 'brand.100')

  useEffect(() => {
    getTasks()
  }, [currentUser])

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


                <Text color={titleColor} fontSize='1.5rem'>
                  Welcome, <Text as='span' fontWeight='bold'>{currentUser.displayName}!</Text>
                </Text>
                <Spacer />
                <Text as='h1' fontWeight='bold' color={titleColor} fontSize='2rem'
                >
                  Tasks
                </Text>
                <Divider orientation='horizontal' />
              </Flex>

              <Flex flexDirection='column' px='2rem' pb='1rem'>
                <Button
                  onClick={onOpen}
                  alignSelf='end'
                  bg='brand.400'
                  filter='auto'
                  color='brand.100'
                  _hover={{ brightness: '110%' }}
                  w='8rem'
                >
                  Add New Task
                </Button>

                <Grid pt='1rem' templateColumns='repeat(4, 1fr)' gap='2rem'>
                  {
                    tasks.length > 0
                      ? tasks.map((task) => (
                        <>
                          <TaskCard
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            handleCompleteTask={() => handleCompleteTask(task.id)}
                            handleDeleteTask={() => handleDeleteTask(task.id)}
                            isCompleted={task.isCompleted}
                          />
                        </>
                      ))
                      : <Text> You don't have any tasks yet </Text>
                  }
                </Grid>
              </Flex>


              <ModalNewTask
                onClose={onClose}
                isOpen={isOpen}
                handleChangeTask={handleChangeTask}
                handleCreateNewTask={handleCreateNewTask}
                newTaskInfo={newTaskInfo}
              />

            </>
          )
          :
          <Loading />
      }
    </>
  )
}

