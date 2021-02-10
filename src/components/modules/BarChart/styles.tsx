import {CSSProperties} from 'react';
export default function useStyles(props={hidden:false}):{[name:string]:CSSProperties} {
	const {hidden}=props;
	return ({
		base:{
			display:hidden?'none':'block',
			margin:0,
			padding:'0.2rem'
		}
	})
}
