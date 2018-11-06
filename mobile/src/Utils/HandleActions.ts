import { Reducer } from "redux";
import { ReducerMap } from "./AddReducer";

export function handleActions<TState>(reducers: ReducerMap<TState, any>, initialState: TState): Reducer<TState> {
    return (state, action) => {
        if (state === undefined) {
            return initialState;
        }

        const reducer = reducers[action.type];

        return reducer ? reducer(state, action) : state;
    };
}
