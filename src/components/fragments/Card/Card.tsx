import React, { useState, useEffect, useReducer, useRef, ComponentElement } from 'react';
import styles from './styles';
import { Card as MuiCard } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
/**
 * @description
 *
 * @param hidden?: boolean
 * @param title: string,
 * @param text?: string,
 * @param tags?: (string | Node)[],
 * @param onCardClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
 * @export
 * @interface CardProps
 */
export interface CardProps {
	hidden?: boolean,
	title: string,
	text?: string,
	tags?: (string | Node)[],
	onCardClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export default function Card(props: CardProps) {
	const { hidden, title, text, tags, onCardClick } = props;
	const [count, setCount] = useState();
	const ariaLabel = 'card';
	return (
		<div aria-label={ariaLabel} style={styles.base} >
			<MuiCard onClick={onCardClick}>
				<CardContent>
					<h1>{title}</h1>
					<p>{text}</p>
				</CardContent>
				<CardActions>
					{tags && tags.map((tag,i) => (
					<Button key={tag+"_"+i}>{tag}</Button>
					))}
				</CardActions>
			</MuiCard>
		</div>
	);
};