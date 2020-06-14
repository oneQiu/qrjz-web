import { TEST } from "utils/constants";
import { IndexActionType } from "actions/index";

export interface StateAction {
	nums: number;
}
const initState: StateAction = {
	nums: 0,
};

export default (state = initState, action: IndexActionType): StateAction => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case TEST:
			newState.nums++;
			break;
		default:
			break;
	}
	return newState;
};
