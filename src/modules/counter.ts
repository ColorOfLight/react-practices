/* -- Action Types -- */
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

/* -- Actions -- */
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

/* -- Type for Action -- */
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

/* -- Type for State -- */
type CounterState = {
  count: number;
};

/* -- State -- */
const initialState: CounterState = {count: 0};

/* -- Reducer -- */
const counter = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return {count: state.count + 1};
    case DECREASE:
      return {count: state.count - 1};
    case INCREASE_BY:
      return {count: state.count + action.payload};
    default:
      return state;
  }
};

export default counter;
