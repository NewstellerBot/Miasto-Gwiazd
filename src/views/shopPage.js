import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SearchResult, Navbar, Searchbar } from '../components'
import '../assets/css/ShopPage.css'

export default function ShopPage() {
  const [products, setResults] = useState([])
  const [shopInfo, setShopInfo] = useState({
    company_name: 'name',
    0: 'desc',
  })

  const { id } = useParams()
  useEffect(() => {
    axios.get(`https://stargard.festiwalczacki.pl/backend/get_shop.php?id=${id}`).then(res => {
      let shopData = JSON.parse(res.data.split('[')[1].split(']')[0])
      let products = []
      res.data
        .split('[')[2]
        .split(']')[0]
        .split('},{')
        .forEach((e, i) => {
          let g = '{' + e.replace('{', '').replace('}', '') + '}'
          products.push(JSON.parse(g))
        })
      console.log(shopData, products)

      console.log(shopInfo)

      setResults(products)
      setShopInfo(shopData)
    })
  }, [id])
  return (
    <div className='shopWrapper'>
      <Navbar />
      <img></img>
      <div className='shopDesc'>
        <h2>{shopInfo.company_name}</h2>
        <p>{shopInfo[0]}</p>
      </div>
      <div className='tileWrapper'>
        {products.map(res => (
          <SearchResult
            productId={res.id}
            image={res.image}
            name={res.product_name}
            price={res.product_price}
            vendor={shopInfo.company_name}
            desc='morem lipsum'
          />
        ))}
      </div>
    </div>
  )
}
