import './tile.css'

const Tile = (props) => {
    const {id, imageUrl, name, price, onDelete, onSetFav, onSetNonFav} = props
    return (
        <div key={id} className='tile-wrapper'>
            <img alt='tileImage' src={imageUrl}></img>
            <span>{name}</span>
            <span>{price}</span>
            {
                onDelete && <button onClick={() => {onDelete(id)}} className='btn-primary'>Delete</button>
            }
            {
                onSetFav && <button onClick={() => {onSetFav(id)}} className='btn-primary'>Add to Fav</button>
            }
            {
                onSetNonFav && <button onClick={() => {onSetNonFav(id)}} className='btn-primary'>Set non Fav</button>
            }
        </div>
    )
}

export default Tile