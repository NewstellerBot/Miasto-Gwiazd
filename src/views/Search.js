import React from 'react'

import { SearchResult } from '../components'

export default function Search(props) {
  // todo axios logic
  const results = [
    {
      id: 1234,
      image: 'https://source.unsplash.com/random',
      name: 'dorem lipsum olor',
      price: 2137,
      desc: 'pora na csa',
    },
  ]

  return (
    <>
      {results.map(res => (
        <SearchResult image={res.image} name={res.name} price={res.price} desc={res.desc} />
      ))}
    </>
  )
}
