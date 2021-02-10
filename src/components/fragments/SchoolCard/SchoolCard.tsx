import {useState, useEffect, useReducer, useRef} from 'react';
import styles from './styles';
import Card,{CardProps} from '../Card/Card'

export interface SchoolCardPropType extends CardProps {
	disabled:'boolean'
}

export default function SchoolCard(props:SchoolCardPropType) {
	const {disabled} = props;
	const [count,setCount] = useState();
	const ariaLabel= 'schoolcard';
	return (
			<div aria-label={ariaLabel} style={styles.base} >

			</div>
	);
};