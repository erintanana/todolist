import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../css/App.css';
import TodoList from "./TodoList";
import TodoAddForm from "./TodoAddForm";

class App extends PureComponent {

    static propTypes = {
        items: PropTypes.array,
    };

    render() {

        return (
            <div className="wrapper">
                <h2>Todo List</h2>
                <TodoList />
                <TodoAddForm />
            </div>
        );
    }
}

export default connect(state => ({
    items: state.todos.list,
}))(App);
