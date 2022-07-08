import {APPInitialStateType} from "../types";
import {appReducer, setAppError, setAppStatus} from "../App-reducer";

let startState: APPInitialStateType;

beforeEach(() => {
    startState = {
        error: null,
        status: 'idle',
    }
})

test('correct error message should be set', () => {

    const endState = appReducer(startState, setAppError({error: 'some error'}))
    expect(endState.error).toBe('some error');
})

test('correct status should be set', () => {

    const endState = appReducer(startState, setAppStatus({status: 'loading'}))

    expect(endState.status).toBe('loading');
})
