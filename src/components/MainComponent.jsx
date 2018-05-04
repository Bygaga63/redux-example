import React from "react";

//из-за этого импорта я час искал что не так, почему не работает
//Module not found: Can't resolve 'redux/index' in '/home/dmitry/projects/redax_example/src'
//Compiling...
//Failed to compile.
import {bindActionCreators} from "redux";

import {connect} from "react-redux";
import {changeFirstName, changeSecondName} from "../store/actions";


//так передавать state в виде объекта в компонент компоненту.
const putStateToProps = (state) => {
    console.log(state)
    return {
        firstName: state.firstName,
        secondName: state.secondName
    };
};

// так передавать методы  ввиде объекта в props
const putActionsToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
};

class MainComponent extends React.Component {
    render() {
        //функция dispatch позволяет управлять action
        const {firstName, secondName, changeFirstName, changeSecondName} = this.props;
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={firstName}
                        placeholder={"First Name"}
                        onChange={(e) => changeFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={secondName}
                        placeholder={"Second Name"}
                        onChange={(e) => changeSecondName(e.target.value)}
                    />
                </div>

                <div>
                    <h1>{this.props.firstName}</h1>
                    <h2>{this.props.secondName}</h2>
                </div>

            </div>
        );
    }
}


// так мы загружаем props. putStateToProps - это функция,
// в которой мы выбираем какие props у нас будут,
// MainComponent - это компонент в который нам нужно засунунть эти пропсы
export default connect(putStateToProps, putActionsToProps)(MainComponent);


