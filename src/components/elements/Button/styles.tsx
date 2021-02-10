import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		base: {
			margin: 0,
			padding: 0
		}}),
		);
export const useErrorStyles = makeStyles((theme: Theme) =>
		createStyles({
			contained: {
				color: theme.palette.error.contrastText,
				backgroundColor: theme.palette.error.main,
				'&:hover': {
					backgroundColor: theme.palette.error.dark,
					'@media (hover: none)': {
						backgroundColor: theme.palette.error.main
					}
				}
			},
			text: {
				color: theme.palette.error.main,
				backgroundColor: theme.palette.error.contrastText,
				'&:hover': {
					backgroundColor: theme.palette.error.light,
					'@media (hover: none)': {
						backgroundColor: theme.palette.error.contrastText
					}
				}
			},
			outlined: {
				color: theme.palette.error.main,
				border:  '1px solid '+theme.palette.error.main,
				'&:hover': {
					backgroundColor: theme.palette.error.light,
					'@media (hover: none)': {
						backgroundColor: '#fff'
					}
				}
			}
		}
		)
);