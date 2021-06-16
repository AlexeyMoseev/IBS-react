import React from 'react'
import './App.scss'
import { Card } from './components/card/Card'
import { Catalog } from './components/catalog/Catalog'
import { Header } from './components/header/Header'

export class App extends React.Component {
	state = {
		item: null,
		items: [],
		filteredData: null,
	}

	componentDidMount() {
		this.getData()
	}

	getData = async () => {
		try {
			const res = await fetch('http://localhost:3006/item')
			const data = await res.json()
			this.setState({
				items: data.content,
			})
		} catch (e) {
			console.log('error', e)
		}
	}

	getDataById = async (id) => {
		try {
			const res = await fetch(`http://localhost:3006/item/${id}`)
			const data = await res.json()
			this.setState({
				item: data.content,
			})
		} catch (e) {
			console.log('ERRR', e)
		}
	}

	handleExit = () => {
		this.setState({
			item: null,
		})
	}

	handleInputChange = (event) => {
		const query = event.target.value

		this.setState((prevState) => {
			const filteredData = prevState.items.filter((element) => {
				return element.name.toLowerCase().includes(query.toLowerCase())
			})
			return {
				filteredData,
			}
		})
	}

	render() {
		return (
			<div className='App'>
				<Header handleInputChange={this.handleInputChange} />
				{!this.state.item ? (
					this.state.filteredData ? (
						<Catalog items={this.state.filteredData} getDataById={this.getDataById} />
					) : (
						<Catalog items={this.state.items} getDataById={this.getDataById} />
					)
				) : (
					<Card
						handleExit={this.handleExit}
						item={this.state.item}
					/>
				)}
			</div>
		)
	}
}
