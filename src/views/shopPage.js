import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchResult from '../components/SearchResult'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function ShopPage() {
  const [results, setResults] = useState([])

  const { query } = useParams()

  useEffect(() => {
    axios.get(`https://stargard.festiwalczacki.pl/backend/get_shop.php?id=${query}`).then(res => {
      setResults(res.data)
    })
  }, [query])

  return (
    <div className='shopWrapper'>
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
