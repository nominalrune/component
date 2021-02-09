import { useState, useEffect } from 'react';
import { Button as MuiButton } from '@material-ui/core'

import styles from './styles';

/**
 * @param children - `string | React.FC`
 * @param variant - `undefined | 'contained' | 'outlined' | 'text'`
 * @param highlight - `undefined | boolean`
 * @param error - `undefined | boolean`
 * @param large - `undefined | boolean`
 * @param small - `undefined | boolean`
 * @param medium - `undefined |boolean`
 * @param disabled - `undefined | boolean`
 *
 * @export
 * @interface ButtonPropType
 */
export interface ButtonPropType {
	/**
	 * the element or texts, sandwiched with Button tags, shows as label of this Button element
	 */
	children: string | React.FC,
	/**
	 * the type of button style
	 * @type {('contained' | 'outlined' | 'text')}
	 * @memberof ButtonPropType
	 */
	variant?: 'contained' | 'outlined' | 'text',
	/**
	 * @description on Style: if it's colored with primary color or not.
	 * @type {boolean}
	 * @memberof ButtonPropType
	 */
	highlight?: boolean,
	/**
	 * @description on Style: if it's colored with error-color or not.
	 * @type {boolean}
	 * @memberof ButtonPropType
	 */
	error?: boolean,
	/**
	 * @description on Style: if it's larger button or not.
	 * @type {boolean}
	 * @memberof ButtonPropType
	 */
	large?: boolean,
	/**
	 * @description on Style: if it's smaller button or not.
	 * @type {boolean}
	 * @memberof ButtonPropType
	 */
	small?: boolean,
	/**
	 * @description on Style: if it's nonal sized button or not.
	 * @type {boolean}
	 * @memberof ButtonPropType
	 */
	medium?: boolean,
/**
 * @description it's disabled or not.
 * @type {boolean}
 * @memberof ButtonPropType
 */
disabled?: boolean
}

export default function Button(props: ButtonPropType = { children: '', variant: 'contained' }) {
	const { children, variant, highlight = false, error = false, large, small, disabled = false, medium } = props;
	const [color, setColor] = useState<'primary' | 'default'>(error ? 'default' : highlight ? 'primary' : 'default');
	const [size, setSize] = useState<"small" | "large" | "medium">(large ? 'large' : small ? 'small' : 'medium');
	useEffect(() => { setColor(error ? 'default' : highlight ? 'primary' : 'default') }, [highlight, error]);
	useEffect(() => { setSize(large ? 'large' : small ? 'small' : 'medium') }, [small, large, medium]);
	const ariaLabel = 'button';
	return (
		<div aria-label={ariaLabel} style={styles.base} >
			<MuiButton color={color} size={size} disabled={disabled} variant={variant} >
				{children}
			</MuiButton>
		</div>
	);
};