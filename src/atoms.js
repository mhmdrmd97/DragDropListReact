import { atom } from "jotai";

export const handleVisibilityAtom = atom(false)
export const selectedItemAtom = atom({id:"1",type:"JavaScript" })
export const fieldsAtom = atom([{id:"1",type:"JavaScript"}, {id:"2",type:"Python"}, {id:"3",type:"TypeScript"}])