import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../db/firebase.js'

const useWines = (idVarietal) => {
    const [wines, setWines] = useState([])
    const [loading, setLoading] = useState(false)

    const getWines = () => {
        setLoading(true)
        const collectionName = collection(db, 'wines')
        if (idVarietal) {
            const q = query(collectionName, where('varietal', '==', idVarietal))
            getDocs(q)
                .then((data) => {
                    const winesDb = data.docs.map((wine) => {
                        return { id: wine.id, ...wine.data() }
                    })
                    setWines(winesDb)
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => setLoading(false))
        } else {
            getDocs(collectionName)
                .then((data) => {
                    const winesDb = data.docs.map((wine) => {
                        return { id: wine.id, ...wine.data() }
                    })
                    setWines(winesDb)
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => setLoading(false))
        }
    }

    useEffect(() => {
        getWines()
    }, [idVarietal])

    return { wines, loading }
}
export default useWines