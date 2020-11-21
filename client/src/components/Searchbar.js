import React, { useState } from 'react'
import '../assets/css/Searchbar.css'
import searchIcon from '../assets/svg/search.svg'
import axios from 'axios'

function Searchbar() {
	const [search, doSearch] = useState('')
	const [autocomplete, changeAutocomplete] = useState('')

	const onChange = (event) => {
		// changeAutocomplete(event.target.value)
		// getAutoComplete()
		console.log(search.replace(search, autocomplete))
	}

	var getAutoComplete = () => {
		axios
			.get(`/searchAC?data=${search}`)
			.then((res) => {
				changeAutocomplete(res)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div>
			<form role='search'>
				<label htmlFor='search'>Search for anything...</label>
				<input id='search' type='search' autoFocus placeholder='Search...' onChange={onChange} autoComplete='off' />
				<input id='autocomplete' type='search' placeholder={autocomplete} autoFocus autoComplete='off' />
				<button type='submit'>
					<img style={{ height: '50%', marginTop: '10%' }} src={searchIcon} />
				</button>
			</form>
		</div>
	)
}

export default Searchbar

//TODO: Ikonka "wyszukaj" się nie wyświetla
