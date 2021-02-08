import { useState, useEffect, useReducer, useRef } from 'react';
import styles from './styles';
import Card, { CardProps } from '../Card/Card'

export interface CardListProps {
	hidden?: boolean,
	dataList: CardProps[]
}

export default function CardList(props: CardListProps) {
	const { hidden, dataList } = props;
	const [count, setCount] = useState();
	const ariaLabel = 'cardlist';
	return (
		<div aria-label={ariaLabel} style={styles.base} >
			{dataList.map((data, i) => (
				<Card key={i} {...data} />
			))}
		</div>
	);
};