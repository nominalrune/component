import { useState, useEffect, useReducer, useRef } from 'react';
import styles from './styles';
import Card, { CardProps } from '../Card/Card'

export interface CardListProps {
	/** whether its hidden or not. */
	hidden?: boolean,
	/** Array of hidden?: boolean, title: string, subtitle?: string, text?: string, tags?: (string | Node)[], onCardClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void */
	dataList: CardProps[]
}

/**
 * maps Card elements, which represets `dataList`. if Card element is not given, `Card` used by default.
 * @param hidden <boolean | undefined> - whether its hidden or not.
 * @param dataList <CardProps[]>
 * @param CardListProps.CardProps[].hidden?: boolean
 * @param CardListProps.CardProps[].title: string,
 * @param CardListProps.CardProps[].text?: string,
 * @param CardListProps.CardProps[].tags?: (string | Node)[],
 * @param CardListProps.CardProps[].onCardClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
 */
export default function CardList(props: CardListProps) {
	const { hidden, dataList } = props;
	const [count, setCount] = useState();
	const ariaLabel = 'cardlist';
	return (
		<div aria-label={ariaLabel}>
			{dataList.map((data, i) => (
				<div style={styles.base} ><Card key={i} {...data} /></div>
			))}
		</div>
	);
};