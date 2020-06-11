import { TEST, TestActionType, TestState } from "./actionType";

export function test(data: TestState) {
	return {
		type: TEST,
		data,
	};
}
