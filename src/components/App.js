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

    // completeTodo = (item) => {
    //     const items = this.state.items.map(el => {
    //         if (el.id === item.id) {
    //             return {...el, isDone: !el.isDone};
    //         }
    //         return el;
    //     });
    //     this.setState({items});
    // }

    removeTodo = (item) => {
        const items = this.state.items.filter(el => el.id !== item.id);
        this.setState({items});
    }

    render() {
        const {items} = this.props;

        return (
            <div className="wrapper">
                <h2>Todo List</h2>
                <TodoList items={items} onRemove={this.removeTodo}/>
                <TodoAddForm />
            </div>
        );
    }
}

export default connect(state => ({
    items: state.todos.list,
}))(App);
