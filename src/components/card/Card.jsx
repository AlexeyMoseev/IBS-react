import classes from './Card.module.scss'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const Card = ({ itemId }) => {
	const [state, setState] = useState({
		item: [],
		price: [],
		picture: [],
	})

	useEffect(() => {
		getDataById(itemId)
	}, [])

	const getDataById = async (id) => {
		try {
			const res = await fetch(`http://localhost:3006/item/${id}`)
			const data = await res.json()
			setState({
				item: data.content,
				price: data.content.price,
				picture: data.content.picture,
			})
		} catch (e) {
			console.log('ERRR', e)
		}
	}

	let currency = state.price.currency
	if (currency === 'USD') {
		currency = '$'
	}

	const history = useHistory()

	return (
		<div className={classes.card}>
			<div className={classes.frame}>
				<img
					src={`http://localhost:3006${state.picture.path}`}
					alt={state.picture.alt}
				/>
			</div>
			<span className={classes.detailedTitle}>{state.item.name}</span>
			<p className={classes.description}>{state.item.description}</p>
			<span className={classes.detailedTitle}>{state.item.details}</span>
			<p className={classes.description}>{state.item.info}</p>
			<div className={classes.purchase}>
				<span className={classes.purchasePrice}>
					<span>{currency}</span>
					<span>{state.price.value}</span>
				</span>
				<div className={classes.wrapperCountAddToCart}>
					<div className={classes.counter}>
						<button className={classes.remove}>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M19 13H5V11H19V13Z' fill='#E97F03' />
							</svg>
						</button>
						<input className={classes.count} defaultValue='1'></input>
						<button className={classes.add}>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z' fill='#E97F03' />
							</svg>
						</button>
					</div>
					<button className={classes.addToCart}>Add to cart</button>
				</div>
				<button
					className={classes.exit}
					onClick={() => {
						history.push('/')
					}}
				>
					Exit
				</button>
				<button className={classes.detailedFavoriteButton}>
					{state.item.like ? (
						<svg
							className={classes.favorite}
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z'
								fill='#E97F03'
							/>
						</svg>
					) : (
						<svg
							width='20'
							height='19'
							viewBox='0 0 20 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z'
								fill='#959595'
							/>
						</svg>
					)}
				</button>
			</div>
		</div>
	)
}
