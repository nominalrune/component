import { useState } from 'react';
import Link from 'next/link'
import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { signIn, signOut, useSession } from 'next-auth/client';
// import {LogoPage} from '../..'


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			margin: 0,
			padding: 0
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
			cursor: 'pointer'
		},
	}),
);
export default function Layout(prop: any) {
	const page = prop.page;
	const classes = useStyles();
	const [session, loading] = useSession();
	const [open, setOpen] = useState(false);
	const closeDialog = () => setOpen(false);
	const openDialog = () => setOpen(true);
	const shouldVisible = () => {
		return page.type.name !== 'LogoPage' && page !== 'EnrollPage'
	}
	console.log(new Date().toISOString(), `HI! THIS IS Layout; now ${shouldVisible()?'visible':'invisible'}. Well, your session is '${session}' and the page is '${page.type.name}'.`)
	return (
		<div className={classes.root}>
			{shouldVisible() &&
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Link href='/'>
						<Typography variant="h6" className={classes.title}>
							過去問サービス
						</Typography>
					</Link>
					{!!session&&<><span>user: {session.user.name || session.user.email}</span>
					<button>Sign out</button></>}
				</Toolbar>
			</AppBar>
			}
			{prop.children}
			<footer>
			</footer>
		</div>
	)
}
