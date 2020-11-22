import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { SearchResult, Navbar, Searchbar } from '../components'

import '../assets/css/Search.css'

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
          <div className='center-text'>
            <h1>Wyniki dla "{query}":</h1>
          </div>
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
        <div className='no-results'>
          <h1>Niestety, nie znaleźliśmy "{query}".</h1>
          <p>Spróbuj wpisać to inaczej.</p>
          <Searchbar className='splash-search search-green' />
        </div>
      )}
    </>
  )
}
