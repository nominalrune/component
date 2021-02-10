import React, { useState, useEffect, useReducer, useRef, CSSProperties } from 'react';
import styles from './styles';
import { Card as MuiCard } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '../../elements/Chip';

export interface CardProps {
	hidden: boolean
	title: string
	subtitle?: string
	image?: string
	text?: string
	tags?: (string | Node)[]
	onCardClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
/**
 * card: margin 0px
 *
 * @export
 * @param {CardProps} props
 * @param CardProps.hidden
 * @param CardProps.title
 * @param CardProps.subtitle
 * @param CardProps.text
 * @param CardProps.image
 * @param CardProps.tags
 * @param CardProps.onCardClick
 */
export default function Card(props: CardProps) {
	const { hidden, title, subtitle, text, image, tags, onCardClick } = props;
	const [count, setCount] = useState();
	const ariaLabel = 'card';
	return (
		<div aria-label={ariaLabel} style={styles.base} >
			<MuiCard elevation={3}>
				<CardContent onClick={onCardClick} style={styles.flex}>
					<div style={styles.row01}>
						<h1 style={styles.title}>{title}</h1>
						<h2 style={subtitle ? styles.subtitle : { display: 'none' }}>{subtitle}</h2>
						<p style={text ? styles.text : { display: 'none' }}>{text}</p>
						<div style={styles.wrapper}>
							{tags && tags.map((tag, i) => (
								<Chip key={tag + "_" + i} label={tag} style={styles.wrapped} />
							))}
						</div>
					</div>
					<div style={styles.row02}>
						<img style={image ? styles.image : { display: 'none' }} src={image} alt={"book_image"} />
					</div>

				</CardContent>
				<CardActions >
				</CardActions>
			</MuiCard>
		</div>
	);
};