export const TEST = "test";

export interface TestState {
	name: string;
	age: number;
}

interface TestAction {
	type: typeof TEST;
	data: TestState;
}

export type TestActionType = TestAction;
