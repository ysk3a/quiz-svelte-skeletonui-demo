import { writable } from "svelte/store"
export interface Answer {
    id: number;
    isCorrect: boolean | null
}
// writable state so that all components can access this data and 
// treat as state to check what to do.
export const answers = writable<Answer[]>([]);