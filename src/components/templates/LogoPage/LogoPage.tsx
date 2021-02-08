import {LogoFadeInOut} from '../..'
import utils from './utils';
import styles from './styles';


export interface LogoPagePropType {
	ctx?:unknown
}

export default function LogoPage(props?:LogoPagePropType) {
	console.log('load LogoPage');
	const {useTimeout} = utils;
	console.log('const useTimeout');
	const ariaLabel= 'page';
	return (
			<div aria-label={ariaLabel}  >
				<LogoFadeInOut isIn={useTimeout(6000)}/>
			</div>
	);
};