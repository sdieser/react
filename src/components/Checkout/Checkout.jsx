import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { Timestamp } from 'firebase/firestore'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../db/firebase.js'
import FormCheckout from './FormCheckout.jsx'
import OrderSuccess from './OrderSuccess.jsx'
import Loading from '../Loading/Loading.jsx'
import { ToastVerifyEmail } from '../Toast/ToastVerifyEmail.jsx'
import './checkout.scss'

const Checkout = () => {
    const { cart, priceTotal, deleteCart } = useContext(CartContext)
    const [showForm, setShowForm] = useState(true)
    const [showLoading, setShowLoading] = useState(false)
    const [showOrder, setShowOrder] = useState(false)
    const [orderId, setOderId] = useState(null)
    const [dataForm, setDataForm] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        verifyEmail: ''
    })

    const handleInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: priceTotal(),
            date: Timestamp.now(new Date())
        }
        if (dataForm.email === dataForm.verifyEmail) {
            uploadOrder(order)
        } else {
            ToastVerifyEmail()
        }
    }

    const uploadOrder = (newOrder) => {
        setShowForm(false)
        setShowLoading(true)
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, newOrder)
            .then((res) => {
                setOderId(res.id)
            })
            .finally(() => {
                setShowLoading(false)
                setShowOrder(true)
                deleteCart()
            })
    }

    return (
        <>
            <div className='checkout'>
                {
                    showForm && <FormCheckout dataForm={dataForm} handleInput={handleInput} handleSubmit={handleSubmit} />
                }
                {
                    showLoading && <Loading />
                }
                {
                    showOrder && <OrderSuccess orderId={orderId} />
                }
            </div>
        </>
    )
}
export default Checkout