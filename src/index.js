import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// надо подключить 2 библиотеки redux и react-redux
import {createStore} from 'redux';
import { Provider} from 'react-redux'
import {rootReducer} from "./store/reducers";
import MainComponent from "./components/MainComponent";

export const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
export const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

//нужно создать store, используя метов create
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
//3) вызываем maincomponent
//4) привязывается к redux через метод connect, выплеваваем это все наружу, забираем и рисуем.