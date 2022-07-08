import {APPInitialStateType, ParamsInitialStateType} from "../types";
import {appReducer, setAppError, setAppStatus} from "../App-reducer";
import {sortByType, subjectType} from "../../API/types";
import {paramsReducer, setParams} from "../Params-reducer";

let startState: ParamsInitialStateType;

beforeEach(() => {
    startState = {
        params: {
            searchingValue: '',
            orderBy: 'relevance' ,
            startIndex: 0,
            maxResults: 30,
            subject: ''
        }
    }
})

test('correct params should be set', () => {
    const payload={
       searchingValue: 'flower',
        orderBy: 'relevance' as sortByType ,
        startIndex: 29,
        maxResults: 30,
        subject: 'poetry' as subjectType
    }

    const endState = paramsReducer(startState, setParams(payload))
    expect(endState.params.searchingValue).toBe('flower');
    expect(endState.params.subject).toBe('poetry');
})


