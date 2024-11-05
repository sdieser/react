import { useState } from 'react'

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className='itemCount'>
                <div className='btn-toolbar'>
                    <div className='btn-group me-3'>
                        <div className='input-group'>
                            <button onClick={handleDecrement} className='btn btn-outline-secondary'>-</button>
                            <span className='input-group-text border border-secondary'>{count}</span>
                            <button onClick={handleIncrement} className='btn btn-outline-secondary'>+</button>
                        </div>
                    </div>
                    <div className='btn-group'>
                        <div>
                            <button onClick={() => addProduct(count)} className='btn btn-primary'>Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemCount