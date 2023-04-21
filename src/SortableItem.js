import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import { atom, useAtomValue } from "jotai";
import { handleVisibilityAtom, selectedItemAtom } from "./atoms";



export function SortableItem({id,topHandle,leftHandle,HandleIcon, children}) {
    // props.id
    // JavaScript
const handleVisibility = useAtomValue(handleVisibilityAtom)
const selectedItem = useAtomValue(selectedItemAtom)
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        
    } = useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={{...style,userSelect:"none"}} >
            
            <SortableContainer isHandleVisible={handleVisibility && selectedItem.id === id } HandleIcon={HandleIcon??<div>handle</div>} topHandle={topHandle??0} leftHandle={leftHandle??0} attributes={attributes} listners={listeners}>
           {children}
            </SortableContainer>
        </div>
    )
}

export const SortableContainer = ({attributes,listners,topHandle,leftHandle,HandleIcon,isHandleVisible,children})=>{
    return <div style={{position:"relative", minWidth:"100%",minHeight:"100%"}}>
        {children}
      {isHandleVisible && <div style={{position:"absolute",top:topHandle,left:leftHandle}}>
        <Handle attributes={attributes} listners={listners}>
        {HandleIcon}
        </Handle></div>}
    </div>
}

export const Handle =({attributes,listners,children})=>{

    return  <div style={{zIndex:"1000"}} {...attributes} {...listners}>{children}</div>

}

