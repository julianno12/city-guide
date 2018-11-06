import { addActionFactory, ReducerMap } from "./AddReducer";

export function StartTask(state: AsyncState): AsyncState {
    return { tasksCount: state.tasksCount + 1 };
}

export function EndTask(state: AsyncState): AsyncState {
    return { tasksCount: state.tasksCount > 0 ? state.tasksCount - 1 : 0 };
}

export const asyncActionsReducers: ReducerMap<AsyncState, any> = {};

const addAction = addActionFactory(asyncActionsReducers);

export const startTask = addAction("TASK/START", () => { }, state => ({ ...state, ...StartTask(state) }));
export const endTask = addAction("TASK/END", () => { }, state => ({ ...state, ...EndTask(state) }));
