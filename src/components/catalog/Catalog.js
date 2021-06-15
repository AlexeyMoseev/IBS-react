import { Item } from '../item/Item'
import classes from './Catalog.module.scss'

export const Catalog = (props) => {
		return (
			<div className={classes.catalog}>
				{props.items.map((elem) => (
					<Item
						id={elem.id}
						key={elem.id}
						name={elem.name}
						currency={elem.price.currency}
						value={elem.price.value}
						like={elem.like}
						alt={elem.picture.alt}
						photoPath={elem.picture.path}
						getDataById={props.getDataById}
					></Item>
				))}
			</div>
		)
	}
