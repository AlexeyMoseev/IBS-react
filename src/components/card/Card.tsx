import s from './index.module.scss';
import { useHistory } from 'react-router-dom';
import { FC } from 'react';
import { ICard } from '../../models/card';
import { API_URL } from '../../API/index';
import { Button } from '../UI/button/Button';
import { Counter } from '../UI/counter/Counter';
import { FavoriteButton } from '../UI/favoriteButton/FavoriteButton';
import { useActions } from '../../hooks/useAction';

interface ICards {
	item: ICard;
}

const Card: FC<ICards> = ({ item }) => {
	const history = useHistory();

	let currency = item.content.price.currency;
	if (currency === 'USD') {
		currency = '$';
	}

	const { data__changeLike } = useActions();

	return (
		<div className={s.card}>
			<div className={s.frame}>
				<img
					src={`${API_URL}${item.content.picture.path}`}
					alt={item.content.picture.alt}
				/>
			</div>
			<span className={s.detailedTitle}>{item.content.name}</span>
			<p className={s.description}>{item.content.description}</p>
			<span className={s.detailedTitle}>{item.content.details}</span>
			<p className={s.description}>{item.content.info}</p>
			<div className={s.purchase}>
				<span className={s.purchasePrice}>
					<span>{currency}</span>
					<span>{item.content.price.value}</span>
				</span>
				<div className={s.wrapperCountAddToCart}>
					<Counter />
					<Button type='addToCart'>Add to cart</Button>
				</div>
				<Button
					onClick={() => {
						history.push('/');
					}}
					type='exit'
				>
					Exit
				</Button>
				<FavoriteButton onClick={data__changeLike} type='detailedFavoriteButton' like={item.content.like} />
			</div>
		</div>
	);
};

export { Card };
