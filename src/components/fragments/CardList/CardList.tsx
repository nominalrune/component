import { useState, useEffect, useReducer, useRef } from 'react';
import styles from './styles';
import Card, { CardProps } from '../Card/Card'
/**
 * @description
 * @param hidden?: boolean,
 * @param dataList <CardProps[]>
 * 		@param CardProps
 * 			@param hidden?: boolean
 * 			@param title: string,
 * 			@param text?: string,
 * 			@param tags?: (string | Node)[],
 * 			@param onCardClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
 * @export
 * @interface CardListProps
 */
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