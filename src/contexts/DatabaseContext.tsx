import { collection, CollectionReference, doc, DocumentData } from 'firebase/firestore';
import { createContext, ReactNode, useContext } from 'react'
import { db } from '../services/FirebaseConfig';

interface DatabaseContext {
  userCollectionRef: CollectionReference<DocumentData>
  // tasksCollectionRef: CollectionReference<DocumentData>
}

const DatabaseContext = createContext({} as DatabaseContext)

export const useDatabase = () => {
  return useContext(DatabaseContext);
}

interface DatabaseProps {
  children: ReactNode
}

export const DatabaseProvider = ({ children }: DatabaseProps) => {


  return <p>nada</p>
}
