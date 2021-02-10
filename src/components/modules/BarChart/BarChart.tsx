import {useState, useEffect, useReducer, useRef} from 'react';
import useStyles from './styles';


export interface BarChartPropType {
	hidden?:boolean,
}

export default function BarChart(props:BarChartPropType) {
	const {hidden} = props;
	const styles = useStyles({hidden:!!hidden})
	const [count,setCount] = useState();
	const ariaLabel= 'barchart';
	return (
			<div aria-label={ariaLabel} style={styles.base} >

			</div>
	);
};