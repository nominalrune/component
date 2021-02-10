import {useState, useEffect, useReducer, useRef} from 'react';
import styles from './styles';

import {Chip as MuiChip} from '@material-ui/core';
export type ChipPropType=Parameters<typeof MuiChip>[0]

export default function Chip(props:ChipPropType){
	return <MuiChip style={styles.base} label={props.label} />
}
