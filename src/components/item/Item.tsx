import s from './index.module.scss';
import { FC } from 'react';
import { IItem } from '../../models/item';
import {API_URL} from '../../API/index'
import { FavoriteButton } from '../UI/favoriteButton/FavoriteButton';

interface IItems {
	onClick: any;
	item: IItem;
}

const Item: FC<IItems> = ({ item, onClick }) => {
	let currency = item.price.currency;
	if (currency === 'USD') {
		currency = '$';
	}

	return (
		<div className={s.item}>
			<FavoriteButton onClick={onClick} type='favoriteButton' like={item.like}/>
			<img
				className={s.image}
				src={`${API_URL}${item.picture.path}`}
				alt={item.picture.alt}
			/>
			<span className={s.title}>{item.name}</span>
			<span className={s.price}>
				<span>{currency}</span>
				<span>{item.price.value}</span>
			</span>
		</div>
	);
};

export { Item };
