import { useState, useEffect, useReducer, useRef } from 'react';
import styles from './styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

export interface SearchbarPropType {

}


export default function Searchbar(props: SearchbarPropType) {

	const [count, setCount] = useState();
	const ariaLabel = 'searchbar';
	const handleSubmit = (e) => { };
	return (
		<div aria-label={ariaLabel} style={styles.base} >
			<Paper component="form" onSubmit={handleSubmit}>
				<InputBase aria-label={'search input'}/>
				<IconButton type="submit" aria-label="search button">
					<SearchIcon />
				</IconButton>
			</Paper>
		</div>
	);
};