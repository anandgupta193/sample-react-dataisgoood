import { useEffect, useState } from 'react';
import './App.css';
import Tile from './components/tile'
import axios from 'axios'

function App() {
  
  const [tileData, setTileData] = useState([])
  const [favList, setFavList] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://my-json-server.typicode.com/Finoy/fake-api/users/')
      setTileData(data)
    }
    getData()
  }, [])

  const onDelete = (id, isFav = false) => {
    if (isFav) {
      const updatedTileData = favList.filter(item => {
        return item.id !== id
      })
      setFavList(updatedTileData)
    } else {
      const updatedTileData = tileData.filter(item => {
        return item.id !== id
      })
      setTileData(updatedTileData)
    }
  }

  const onSetFav = (id) => {
    const tile = tileData.find(item => item.id === id)
    setFavList([...favList, tile])
    onDelete(id)
  }

  const onSetNonFav = (id) => {
    const tile = favList.find(item => item.id === id)
    setTileData([...tileData, tile])
    onDelete(id, true)
  }

  return (
    <div className="App">
      <h1>All Data...</h1>
      <div className='tile'>
        {
          tileData.map(element => {
            return (
              <Tile
                id={element.id}
                imageUrl={element?.picture?.large}
                name={element?.name?.first}
                price={'99 only'}
                onDelete={onDelete}
                onSetFav={onSetFav}
              />
            )
          })
        }
      </div>
      {
        favList.length > 0 &&
        <h1>Favourites...</h1>
      }
      <div className='fav-tile'>
        {
          favList.map(element => {
            return (
              <Tile
                id={element.id}
                imageUrl={element?.picture?.large}
                name={element?.name?.first}
                price={'99 only'}
                onSetNonFav={onSetNonFav}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;