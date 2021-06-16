import React from 'react'
import { Item } from '../item/Item'
import classes from './Catalog.module.scss'

export class Catalog extends React.Component {
	render() {
		return (
			<div className={classes.catalog}>
				{this.props.items.map((elem) => (
					<Item
						id={elem.id}
						key={elem.id}
						name={elem.name}
						currency={elem.price.currency}
						value={elem.price.value}
						like={elem.like}
						alt={elem.picture.alt}
						photoPath={elem.picture.path}
						getDataById={this.props.getDataById}
					></Item>
				))}
			</div>
		)
	}
}
