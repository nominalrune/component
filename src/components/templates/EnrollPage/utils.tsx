import {useState, useEffect, useReducer, useRef} from 'react';


const A =Symbol("a");
const B=Symbol('b');
type fnProp=(typeof A|typeof B)[];
function fn(p:fnProp){
	const [A,B]=p;
	return [A,B]
}
console.log('fn',);

const utils={

	a:()=>{},
	b:()=>{},
};

export default utils;