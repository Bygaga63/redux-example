import {ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME} from "../index";

const initialState = {
    firstName: 'Dima',
    secondName: 'Mukhin'
};

// Нужно создать корневую функцию, которая принимает 2 параметра,
// это state и экшен. И она всегда должна возвращать новый state, меняя старый.
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_FIRST_NAME:
            return {...state, firstName: action.payload};
            break;
        case ACTION_CHANGE_SECOND_NAME:
            return {...state, secondName: action.payload};
            break;
    }
    return state;
};