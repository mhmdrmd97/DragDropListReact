import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";


export function SortableItem({id,topHandle,leftHandle,HandleIcon, children}) {
    // props.id
    // JavaScript

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
        <div ref={setNodeRef} style={{...style}} >
            
            <SortableContainer HandleIcon={HandleIcon??<div>handle</div>} topHandle={topHandle??0} leftHandle={leftHandle??0} attributes={attributes} listners={listeners}>
           {children}
            </SortableContainer>
        </div>
    )
}

export const SortableContainer = ({attributes,listners,topHandle,leftHandle,HandleIcon,children})=>{
    return <div style={{position:"relative", minWidth:"100%",minHeight:"100%"}}>
        {children}
      <div style={{position:"absolute",top:topHandle,left:leftHandle}}>
        <Handle attributes={attributes} listners={listners}>
        {HandleIcon}
        </Handle></div>
    </div>
}

export const Handle =({attributes,listners,children})=>{

    return  <div style={{zIndex:"1000"}} {...attributes} {...listners}>{children}</div>

}

