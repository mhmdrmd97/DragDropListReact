
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {useState} from 'react';
import { SortableItem } from './SortableItem';
import { Card } from 'react-bootstrap';

function MySortableList() {
  //replace by jotai
    const [fields, setFields ] = useState([{id:"1",type:"JavaScript"}, {id:"2",type:"Python"}, {id:"3",type:"TypeScript"}]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Container className="p-3" style={{"width": "50%"}} align="center">
        <h3>The best programming fields!</h3>
        <SortableContext
          items={fields}
          strategy={verticalListSortingStrategy}
       
       > 
       
          {/* We need components that use the useSortable hook */}
          {fields.map((field,index) =><div key={field.id*Math.random()}>
              
            <SortableItem  topHandle={0} leftHandle={"50%"}   {...field} >
            <Card body className="m-3">
               
               {field.type}
               </Card>
            </SortableItem>
          </div> 
            
            )}
        </SortableContext>
      </Container>
    </DndContext>
  );

  function handleDragEnd(event) {
    const {active, over} = event;
    if (active.id !== over.id) {
      setFields((items) => {
        const activeIndex = items.findIndex(item => item.id === active.id);
        const overIndex = items.findIndex(item => item.id === over.id);
        console.log(arrayMove(items, activeIndex, overIndex))
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default MySortableList;
