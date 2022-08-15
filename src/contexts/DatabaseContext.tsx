import { collection, CollectionReference, doc, DocumentData, getDocs, QuerySnapshot } from 'firebase/firestore';
import { createContext, ReactNode, useContext } from 'react'
import { db } from '../services/FirebaseConfig';
import { useAuth } from './AuthContext';

interface DatabaseContext {
  getTasks: () => Promise<{
    id: string;
    uid: any;
    tasksCollectionRef: CollectionReference<DocumentData>;
    tasks: QuerySnapshot<DocumentData>;
    tasksData: DocumentData[];
  }>
  userCollectionRef: CollectionReference<DocumentData>
}

const DatabaseContext = createContext({} as DatabaseContext)

export const useDatabase = () => {
  return useContext(DatabaseContext);
}
interface DatabaseProps {
  children: ReactNode
}

export const DatabaseProvider = ({ children }: DatabaseProps) => {

  const { currentUser } = useAuth()

  const userCollectionRef = collection(db, 'user')

  const getTasks = async () => {
    const data = await getDocs(userCollectionRef)

    const searchUserUid = data.docs.map((doc) => (doc.get('uid'))).filter((uid) => uid == currentUser.uid)
    const searchUserID = data.docs
      .map(doc => ({ ...doc.data(), id: doc.id, uid: doc.get('uid') }))
      .filter((user) => user.uid == searchUserUid && user.id)

    const { id, uid } = searchUserID[0]
    const tasksCollectionRef = collection(db, `user/${id}/tasks`)
    const tasks = await getDocs(tasksCollectionRef)
    const tasksData = (tasks.docs.map((doc) => (doc.data())))

    const userInfos = {
      id, uid, tasksCollectionRef, tasks, tasksData
    }

    return userInfos
  }

  // console.log(userInfos)


  const values = {
    getTasks,
    userCollectionRef
  }

  return <DatabaseContext.Provider value={values}>{children}</DatabaseContext.Provider>
}
