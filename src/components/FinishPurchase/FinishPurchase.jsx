import { Link } from 'react-router-dom'

const FinishPurchase = () => {
    return (
        <>
            <div className='finishPurchase'>
                <Link to='/cart'>
                    <button type='button' className='btn btn-primary'>Terminar compra</button>
                </Link>
            </div>
        </>
    )
}
export default FinishPurchase