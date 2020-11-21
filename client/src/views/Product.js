import React from 'react'
import '../assets/css/ProductPage.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import image from '../assets/svg/product.png'
// import navBar from '../components/navbar'

export default function ProductPage(props) {
	var productData = {
		title: 'Title',
		description:
			'opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis ',
		shopId: '12345676',
		price: '420',
		img: './assets/svg/product.png',
		delivery: [
			{
				deliveryName: 'Paczkomat',
				deliveryCost: '20zł',
			},
			{
				deliveryName: 'Odbiór osobisty',
				deliveryCost: '0zł',
			},
		],
	}

	const [shippingList, updateShippingList] = useState()

	const [deliveryType, whatDelivery] = useState(1)

	useEffect(() => {
		axios
			.get(`/product?pid=${props.productId}`)
			.then((res) => {
				if (res != 0) {
					productData = res
				}
			})
			.catch((err) => {
				console.log(err)
			})
			.then(() => {
				let shipsAvailable = productData.delivery.map((ship, i) => (
					<div className='product shipment element' key={i}>
						<div className='product shipment checked'>
							<input
								type='checkbox'
								className='product shipment checkbox'
								onChange={() => {
									whatDelivery(deliveryType + i)
									console.log(whatDelivery)
								}}
								checked={deliveryType == i ? 1 : 0}
							></input>
						</div>
						<div className='product shipment name'>{ship.deliveryName}</div>
						<div className='product shipment cost'>{ship.deliveryCost}</div>
					</div>
				))
				updateShippingList(shipsAvailable)
			})
	}, [])

	return (
		<div className='product wrapper' id={props.productId}>
			<div className='product section-1'>
				<div className='product image'>
					<img src={image}></img>
				</div>
				<div className='product text'>
					<h1 className='product title'>{productData.title}</h1>
					<div className='product shopper'>
						<h2 className='product price'>{productData.price} zł</h2>
						<div className='product quantDiv'>
							<p>Ilość: </p>
							<input className='product quant' placeholder='1' />
						</div>
					</div>
					<a href='#' className='product buyButton'>
						Dodaj do koszyka
					</a>
					<h3 className='product desc'>{productData.description}</h3>
				</div>
			</div>
			<div className='product section-2'>
				<h1 className='product shipment header'>Dostawa</h1>
				<div className='product shippingTableWrapper'>{shippingList}</div>
			</div>
		</div>
	)
}
