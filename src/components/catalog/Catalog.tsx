import { useEffect } from 'react';
import { Item } from '../item/Item';
import { Card } from '../card/Card';
import s from './index.module.scss';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header } from '../header/Header';

interface MatchParams {
	id?: string;
}

const Catalog = () => {
	const { data } = useTypedSelector((state) => state);
	const {
		data__getItemById,
		data__changeLikeItem,
		data__changeLikeItemFiltred,
	} = useActions();
	const { params } = useRouteMatch<MatchParams>();

	const id = params.id ? params.id || '' : '';

	useEffect(() => {
		if (id) {
			data__getItemById(id);
		}
		// eslint-disable-next-line
	}, [id]);

	if (!data.items) return <div>Загрузка...</div>;

	return (
		<>
			{id ? <Header type='disabledSearch'/> : <Header type='enabledSearch' />}
			<div className={s.catalog}>
				{id ? (
					<div>
						{!!data.item ? <Card item={data.item} /> : <div>Загрузка...</div>}
					</div>
				) : !data.filtredItems ? (
					data.items.length ? (
						data.items?.map((elem, index) => (
							<Link className={s.link} to={`/${elem.id}`} key={elem.id}>
								<Item
									onClick={(event: any) => data__changeLikeItem(event, index)}
									item={elem}
								/>
							</Link>
						))
					) : (
						<div>Список пуст</div>
					)
				) : data.filtredItems.length ? (
					data.filtredItems?.map((elem, index) => (
						<Link className={s.link} to={`/${elem.id}`} key={elem.id}>
							<Item
								onClick={(event: any) => data__changeLikeItemFiltred(event, index)}
								item={elem}
							/>
						</Link>
					))
				) : (
					<div>Не найдено ни одного элемента по заданным параметрам</div>
				)}
			</div>
		</>
	);
};

export { Catalog };
