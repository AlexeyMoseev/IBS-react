import s from './index.module.scss';
import { Route, Switch } from 'react-router-dom';
import { MENU } from '../../static-data/menu';

const LayoutMain = () => {
	return (
		<div className={s.wrap}>
			<Switch>
				{MENU.map((item) => (
					<Route
						component={item.component}
						exact={item.exact}
						key={item.href}
						path={item.href}
					/>
				))}
			</Switch>
		</div>
	);
};

export { LayoutMain };
