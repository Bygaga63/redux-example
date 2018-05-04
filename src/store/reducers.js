import {ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME} from "../index";

//начальный state
const initialState = {
    firstName: 'Dima',
    secondName: 'Mukhin'
};

// Нужно создать корневую функцию, которая принимает 2 параметра,
// это state и экшен. Задаем state по умолчанию. И она всегда должна возвращать новый state, меняя старый.
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_FIRST_NAME:
            return {...state, firstName: action.payload};
        case ACTION_CHANGE_SECOND_NAME:
            return {...state, secondName: action.payload};
        default: return state;
    }
};