import { SyntheticEvent, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			margin:'1px',
			padding: '1px 3px',
			display: 'flex',
			alignItems: 'center',
			width: '100%',
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
	}),
);

export default function BookSearchBar(prop: { onSubmit }) {
	const classes = useStyles();
	const { onSubmit } = prop;
	const [value, setValue] = useState("");
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		onSubmit(value);
	}
	return (
		<Paper component="form" className={classes.root} onSubmit={handleSubmit}>
			<InputBase
				className={classes.input}
				placeholder="search by isbn"
				onChange={e => { setValue(e.target.value); console.log(value) }}
				inputProps={{ 'aria-label': 'search by isbn' }}
			/>
			<IconButton type="submit" className={classes.iconButton} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}