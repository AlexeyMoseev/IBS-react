import { useEffect, useState } from 'react'
import './App.scss'
import { Card } from './components/card/Card'
import { Catalog } from './components/catalog/Catalog'
import { Header } from './components/header/Header'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export const App = () => {
	const [state, setState] = useState({
		items: [],
		filteredData: null,
		itemId: null
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

	const history = useHistory()

	const routeChange = (id) => {
		setState({
			...state,
			itemId: id,
		})
		let path = `card/${id}`
		history.push(path)
	}

	return (
		<div className='App'>
			<Header handleInputChange={handleInputChange} />
			<Switch>
				<Route path='/card/:id'>
					<Card itemId={state.itemId} />
				</Route>
				<Route exact path='/'>
					{state.filteredData ? (
						<Catalog items={state.filteredData} routeChange={routeChange} />
					) : (
						<Catalog items={state.items} routeChange={routeChange} />
					)}
				</Route>
				<Redirect to='/' />
			</Switch>
		</div>
	)
}
