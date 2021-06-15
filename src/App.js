import { useEffect, useState } from 'react'
import './App.scss'
import { Card } from './components/card/Card'
import { Catalog } from './components/catalog/Catalog'
import { Header } from './components/header/Header'

export const App = () => {
	const [state, setState] = useState({
		item: null,
		items: [],
		filteredData: null,
	})

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		try {
			const res = await fetch('http://localhost:3006/item')
			const data = await res.json()
			setState({
				...state,
				items: data.content,
			})
		} catch (e) {
			console.log('error', e)
		}
	}

	const getDataById = async (id) => {
		try {
			const res = await fetch(`http://localhost:3006/item/${id}`)
			const data = await res.json()
			setState({
				...state,
				item: data.content,
			})
		} catch (e) {
			console.log('ERRR', e)
		}
	}

	const handleExit = () => {
		setState({
			...state,
			item: null,
		})
	}

	const handleInputChange = (event) => {
		const query = event.target.value

		setState((prevState) => {
			const filteredData = prevState.items.filter((element) => {
				return element.name.toLowerCase().includes(query.toLowerCase())
			})
			return {
				...state,
				filteredData,
			}
		})
	}

	return (
		<div className='App'>
			<Header handleInputChange={handleInputChange} />
			{!state.item ? (
				state.filteredData ? (
					<Catalog items={state.filteredData} getDataById={getDataById} />
				) : (
					<Catalog items={state.items} getDataById={getDataById} />
				)
			) : (
				<Card handleExit={handleExit} item={state.item} />
			)}
		</div>
	)
}
