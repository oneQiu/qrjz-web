import { TEST } from "utils/constants";

export interface TestState {
	name: string;
	age: number;
}

interface TestAction {
	type: TEST;
	data: TestState;
}

export function test(data: TestState) {
	return {
		type: TEST,
		data,
	};
}

export type IndexActionType = TestAction;
