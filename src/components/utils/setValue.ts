import { ChangeEvent, SyntheticEvent } from "react";

export const getFormValue=<E extends ChangeEvent>(stateSetter:(value:unknown)=>{})=>(event:SyntheticEvent<React.DetailedReactHTMLElement<type,HTMLInputElement>,E>,propagation?:'stop'|'preventDefault'|'default')=>{
	stateSetter(event.target.value);

}