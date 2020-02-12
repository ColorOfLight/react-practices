import {createAction, ActionType, createReducer} from 'typesafe-actions';

/* -- Action Types -- */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

/* -- Actions -- */
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

/* -- Type for Action -- */
const actions = {increase, decrease, increaseBy};
type CounterAction = ActionType<typeof actions>;

/* -- Type for State -- */
type CounterState = {
  count: number;
};

/* -- State -- */
const initialState: CounterState = {count: 0};

/* -- Reducer -- */
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({count: state.count + 1}),
  [DECREASE]: state => ({count: state.count - 1}),
  [INCREASE_BY]: (state, action) => ({count: state.count + action.payload}),
});

export default counter;
