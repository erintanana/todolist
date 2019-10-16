/**
 * Created by User on 10.10.2019.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTask} from '../reducers/todos/actions';

class TodoAddForm extends PureComponent {
    static propTypes = {
        onAdd: PropTypes.func.isRequired,
    };

    onAdd = (event) => {
        const {onAdd} = this.props;
        event.preventDefault();
        let newItemValue = this.refs.todoText.value;
        if (newItemValue) {
            onAdd(newItemValue);
            this.refs.todoForm.reset();
        }

    }

    render() {
        return (
            <form className="add-todo-form" ref="todoForm" onSubmit={this.onAdd}>
                <input type="text" ref="todoText"/>
                <button type="submit" className="add-todo-form-button">+ Add todo</button>
            </form>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        onAdd: task => dispatch(addTask(task)),
    }),
)(TodoAddForm);