import { TEST, TestActionType } from "./actionType";

export interface StateAction {
	nums: number;
}
const initState: StateAction = {
	nums: 0,
};

export default (state = initState, actionType: TestActionType): StateAction => {
	const newState = Object.assign({}, state);
	switch (actionType.type) {
		case TEST:
			newState.nums++;
			break;
		default:
			break;
	}
	return newState;
};
