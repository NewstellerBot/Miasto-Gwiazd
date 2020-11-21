import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { SearchResult } from '../components'

export default function Search(props) {
  const [results, setResults] = useState([])

  const { query } = useParams()

  useEffect(() => {
    axios.get(`https://stargard.festiwalczacki.pl/backend/search_results.php?s=${query}`).then(res => {
      setResults(res.data)
    })
  }, [query])

  return results ? (
    <div className='results'>
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
  ) : (
    <div className='no-results' />
  )
}
