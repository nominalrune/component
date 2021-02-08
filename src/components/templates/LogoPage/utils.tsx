import { useState, useEffect, useReducer, useRef } from 'react';
const utils = {

	useTimeout: (timeout: number) => {
		const [isIn, setIn] = useState(true);
		console.log('useTimeout called',isIn);
		useEffect(() => void setTimeout(() => {
			setIn(false)
			console.log('useEffect',isIn);
		}, timeout)
		)
		console.log('useTimeout returns',isIn);
		return isIn
	},
};

export default utils;