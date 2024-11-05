import { createContext, useState } from 'react';
import { ToastStock } from '../components/Toast/ToastStock';

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addWineCart = (wine) => {
        let index = cart.findIndex((e) => e.id === wine.id);

        if (index === -1) {
            setCart([...cart, wine])
        } else if (cart[index].quantity + wine.quantity > wine.stock) {
            ToastStock()
        } else {
            cart[index].quantity = cart[index].quantity + wine.quantity
            setCart([...cart])
        }
    }

    const deleteWineCart = (idWine) => {
        const array = cart.filter((wine) => wine.id !== idWine)
        setCart(array)
    }

    const cartTotal = () => {
        const total = cart.reduce((acc, wine) => acc + wine.quantity, 0)
        return total
    }

    const priceTotal = () => {
        let total = cart.reduce((acc, wine) => acc + (wine.price * wine.quantity), 0)
        return total
    }

    const deleteCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addWineCart, cartTotal, priceTotal, deleteWineCart, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContext, CartProvider }