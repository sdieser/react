import Item from './Item'

const ItemList = ({ wines }) => {
    return (
        <>
            {
                wines.map((w) => (
                    <section className='itemList' key={w.id}>
                        <div className='card text-center shadow'>
                            <Item wine={w} />
                        </div>
                    </section>
                ))
            }
        </>
    )
}
export default ItemList