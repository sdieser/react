import { useEffect, useState } from "react";
import { getWines } from "../data/data";

const useWines = (idVarietal) => {
    const [wines, setWines] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getWines(idVarietal)
            .then((data) => {
                if (idVarietal) {
                    const filterVarietal = data.filter((wine) => wine.varietal === idVarietal)
                    setWines(filterVarietal)
                } else {
                    setWines(data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => setLoading(false))
    }, [idVarietal])

    return { wines, loading }
}

export default useWines