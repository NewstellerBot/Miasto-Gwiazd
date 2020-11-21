import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { SearchResult, Navbar } from '../components'

export default function Search(props) {
  const [results, setResults] = useState([])

  const { query } = useParams()

  useEffect(() => {
    axios.get(`https://stargard.festiwalczacki.pl/backend/search_results.php?s=${query}`).then(res => {
      setResults(res.data)
      console.log(res.data)
    })
  }, [query])

  return (
    <>
      <Navbar />
      {results ? (
        <div className='results'>
          {results.map(res => (
            <SearchResult
              key={res.product_id}
              productId={res.product_id}
              name={res.product_name}
              image={res.product_img}
              price={res.product_price}
              desc={res.product_desc}
              company={res.company_name}
            />
          ))}
        </div>
      ) : (
        <div className='no-results' />
      )}
    </>
  )
}
