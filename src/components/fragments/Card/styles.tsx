import {CSSProperties} from 'react';
const styles = (():{[name:string]:CSSProperties} => {
	return ({
		base: {
			margin: 0,
			minWidth: '256px',
			padding: '0.5rem',
			overflowWrap: 'break-word',
		},
		flex: {
			display:'grid',
			gridTemplateColumns:'3fr 1fr auto',
		},
		row01:{
			display:'flex',
			flexFlow:'column wrap',
			overflowWrap: 'break-word',
			padding:'0 0.5rem'
		},
		title: {
			fontSize: '1.2rem',
		},
		subtitle: {
			fontSize: '0.9rem',
			color: 'gray',
			fontWeight: 'bold',
		},
		text: {
			overflowWrap: 'break-word'
		},
		wrapper: {
			flexFlow:'column wrap'
		},
		wrapped: {
			margin: '0.2em',
			overflowWrap: 'break-word'
		},
		row02: {
			display:'block',
			flexFlow:'colum wrap',
			placeSelf:'center flex-end',
		},
		image: {
			minWidth: '32px',
			maxWidth: 'auto',
			minHeight: '32px',
			maxHeight: '128px',
		},
	})
})()
export default styles;