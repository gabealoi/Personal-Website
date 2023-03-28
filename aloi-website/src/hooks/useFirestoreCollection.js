import { useEffect, useState } from 'react';
import {collection, onSnapshot} from 'firebase/firestore';
import { db } from '../lib/init-firebase'; 

const useFirestoreCollection = (collectionName) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
        setLoading(false);
      });
      return () => unsubscribe();
    }, [collectionName]);
  
    return { loading, data };
  };
  
  export default useFirestoreCollection;
