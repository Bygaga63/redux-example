import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// надо подключить 2 библиотеки redux и react-redux
import {createStore} from 'redux';
import { Provider} from 'react-redux'
import {rootReducer} from "./store/reducers";
import MainComponent from "./components/MainComponent";

export const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
export const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

//нужно создать store, используя метод create.
//rootReducer мы создаем сами. Лежит в папке store
const store = createStore(rootReducer);

ReactDOM.render(
    //С помощью провайдера мы опракидываем store
    <Provider store={store}>
    <MainComponent/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


//еще раз по шагам
//1) создаем стор
//2) кладем его в провайдер
//3) вызываем MainComponent
//4) привязываемся к redux через метод connect, отдаем view.