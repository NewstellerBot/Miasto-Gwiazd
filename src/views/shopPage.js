import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SearchResult, Navbar, Searchbar } from '../components'
import '../assets/css/ShopPage.css'

export default function ShopPage() {
  const [results, setResults] = useState([])
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    axios.get(`https://stargard.festiwalczacki.pl/backend/get_shop.php?id=${id}`).then(res => {
      setResults(res.data)
    })
  }, [id])
  return (
    <div className='shopWrapper'>
      <Navbar />
      <img></img>
      <div className='shopDesc'>
        <h2>NAZWA SKLEPU</h2>
        <p>OPIS SKLEPU OPIS SKLEPU OPIS SKLEPU OPIS SKLEPU OPIS SKLEPU </p>
      </div>
      <div className='tileWrapper'>
        {results.map(res => (
          <SearchResult
            productId={res.id}
            image={res.image}
            name={res.product_name}
            price={res.price}
            vendor={res.vendor}
            desc='morem lipsum'
          />
        ))}
      </div>
    </div>
  )
}
