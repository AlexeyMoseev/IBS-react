import s from './index.module.scss';
import { FC } from 'react';

interface IButton {
	onClick?: any;
	type: string;
}

const Button: FC<IButton> = (props) => {
	return <button onClick={props.onClick} className={s[props.type]}>{props.children}</button>;
};

export { Button };
