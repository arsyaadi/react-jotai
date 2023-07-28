import { atom } from "jotai";

export interface ITodo {
    id: string;
    text: string;
    done: boolean;
}

export const todoAtom = atom<ITodo[]>([])