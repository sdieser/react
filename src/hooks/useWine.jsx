import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import db from '../db/firebase.js'

const useWine = (idWine) => {
    const [wine, setWine] = useState({})
    const [wineLoad, setWineLoad] = useState(true)

    const getWine = () => {
        const docRef = doc(db, 'wines', idWine)
        getDoc(docRef)
            .then((data) => {
                const wineDb = { id: data.id, ...data.data() }
                setWine(wineDb)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => setWineLoad(false))
    }

    useEffect(() => {
        getWine()
    }, [])

    return { wine, wineLoad }
}
export default useWine