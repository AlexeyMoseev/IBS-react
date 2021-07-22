import s from './index.module.scss';
import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(1);

	const handleIncrement = () => {
		if (count < 100) {
			setCount((prevCount) => prevCount + 1);
		}
	};

	const handleDecrement = () => {
		if (count > 1) {
			setCount((prevCount) => prevCount - 1);
		}
	};

	const onChange = (e: any) => {
		let units: number;
		if (e.target.value < 101) {
			units = parseInt(e.target.value) || 1;
			setCount(units);
		}
	};

	return (
		<div className={s.counter}>
			<button className={s.remove} onClick={handleDecrement}>
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
			<input
				type='number'
				className={s.count}
				onChange={onChange}
				value={count}
			></input>
			<button className={s.add} onClick={handleIncrement}>
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
	);
};

export { Counter };
