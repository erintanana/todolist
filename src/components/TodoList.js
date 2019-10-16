/**
 * Created by User on 09.10.2019.
 */
import React, {PureComponent} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const styles = {
    ul: {
        border: '2px solid #FFE4B5',
        padding: '2rem',
        listStyle: 'none',
    }
};

class TodoList extends PureComponent {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        onRemove: PropTypes.func.isRequired,
    };

    render() {
        const {items, onRemove} = this.props;

        return (
            <ul className="list-group" style={styles.ul}>
                {
                    items.length ? items.map((item) => {
                        return <TodoItem item={item}
                                         key={item.id}
                                         removeTodo={onRemove}
                        />
                    }) : <h3 className="list-group-empty">TodoList is empty!</h3>
                }
            </ul>
        );
    }
}

export default TodoList;