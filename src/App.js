import React from 'react'
import './App.css';
import MySortableList from './MySortableList';
import { Button } from '@mui/material';
import { useSetAtom } from 'jotai';
import { fieldsAtom } from './atoms';

function App() {
  const setFields = useSetAtom(fieldsAtom)
  return (
    <div>
      <MySortableList />
      <Button onClick={()=>setFields((fields)=>[...fields,{id:`${Math.random()}`,type:"New"}])} >
        Add
      </Button>
    </div>
  )
}

export default App
