import { Action } from "redux";

const allReducers: { [action: string]: undefined | true } = {};

type ActionFunction<TArgs extends any[], R> = (...args: TArgs) => R;

interface ActionWithPayload<TPayload, TAction> extends Action<TAction> {
    payload?: TPayload;
    error?: boolean;
}

type Reducer<TState, TPayload> = (state: TState, action: Action<TPayload>) => TState;

type ReducerMapValue<TState, TPayload> = Reducer<TState, TPayload>;

export interface ReducerMap<TState, TPayload> {
    [actionType: string]: ReducerMapValue<TState, TPayload>;
}

export function addActionFactory<TState>(reducers: ReducerMap<TState, any>) {
    return function addAction<TPayload, TArgs extends any[], TAction extends string>(
        actionType: TAction,
        payloadCreator: ActionFunction<TArgs, TPayload>,
        reducer: (state: TState, action: Action & { payload: TPayload }) => TState
    ): ActionFunction<TArgs, ActionWithPayload<TPayload, TAction>> {
        if (allReducers[actionType]) {
            throw `Tried to create reducer for ${actionType} when it already existed.`;
        }
        allReducers[actionType] = true;

        reducers[actionType] = reducer;

        const action: ActionFunction<TArgs, ActionWithPayload<TPayload, TAction>> = (...args) => {
            const payload = payloadCreator(...args);

            return {
                type: actionType,
                payload
            };
        };

        return action as any;
    };
}

export type UnboxAction<T> = T extends ActionFunction<any[], ActionWithPayload<infer TPayload, infer TAction>> ? Action<TAction> & { payload: TPayload } : never;
