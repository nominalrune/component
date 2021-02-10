import { useState, useEffect } from 'react';
import { Button as MuiButton } from '@material-ui/core'

import {useStyles,useErrorStyles} from './styles';

export default function Button(props: ButtonPropType) {
	const styles=useStyles();
	const errors=useErrorStyles();
	const { children, variant = 'contained', highlight = false, error = false, large, small, disabled = false, medium } = props;
	const [color, setColor] =
		useState<'primary' | 'default'>(error ? 'default' : highlight ? 'primary' : 'default');
	const [size, setSize] =
		useState<"small" | "large" | "medium">(large ? 'large' : small ? 'small' : 'medium');
	useEffect(() => {
		setColor(error ? 'default' : highlight ? 'primary' : 'default')
	}, [highlight, error]);
	useEffect(() => {
		setSize(large ? 'large' : small ? 'small' : 'medium')
	}, [small, large, medium]);
	const ariaLabel = 'button';
	const whichClass=(variant:string)=>{
		if(error){
		switch (variant) {
			case 'contained':return errors.contained;
			case 'text':return errors.text;
			case 'outlined':return errors.outlined;
			default:return errors.contained;
		}}
	}
	return (
		<div aria-label={ariaLabel} className={styles.base} >
			<MuiButton className={whichClass(variant)} color={color} size={size} disabled={disabled} variant={variant} >
				{children}
			</MuiButton>
		</div>
	);
};


export interface ButtonPropType {
	/** the element or texts, sandwiched with Button tags, shows as label of this Button element */
	children: string | React.FC,
	/** the type of button style */
	variant?: 'contained' | 'outlined' | 'text',
	/*** on Style: if it's colored with primary color or not. */
	highlight?: boolean,
	/** on Style: if it's colored with error-color or not. */
	error?: boolean,
	/** on Style: if it's larger button or not. */
	large?: boolean,
	/** on Style: if it's smaller button or not. */
	small?: boolean,
	/** on Style: if it's nonal sized button or not. */
	medium?: boolean,
	/**it's disabled or not. */
	disabled?: boolean
}
