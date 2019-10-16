import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {complete} from '../reducers/todos/actions';
import {remove} from '../reducers/todos/actions';

const styles = {
    li: {
        border: '1px solid #FDF5E6',
        borderRadius: '5px',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
    },
    button: {
        background: '#FFE4B5',
        opacity: '0.7',
        borderRadius: '4px',
    }
};

class TodoItem extends PureComponent {

    static propTypes = {
        item: PropTypes.shape({
            isDone: PropTypes.bool,
            task: PropTypes.string,
            id: PropTypes.number,
        }).isRequired,
        onDone: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
    };

    onDone = () => {
        const {item, onDone} = this.props;
        onDone(item.id);
    }

    onRemove = () => {
        const {item, onRemove} = this.props;
        onRemove(item.id);
    }

    render() {
        const todoClass = this.props.item.isDone ? 'is-done' : 'not-done';
        return (
            <li className="list-group-item" style={styles.li}>
                <span className={todoClass}>
                    <span className="list-group-item-checkbox">
                        <input type="checkbox" onClick={this.onDone}/>
                    </span>
                    {this.props.item.task}
                </span>
                <button style={styles.button} onClick={this.onRemove}>&times;</button>
            </li>
        );
    }
}

export default connect(
    state => ({
        items: state.todos.list,
    }),
    dispatch => ({
        onDone: id => dispatch(complete(id)),
        onRemove: id => dispatch(remove(id)),
    }),
)(TodoItem);