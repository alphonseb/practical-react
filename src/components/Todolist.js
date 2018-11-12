import React from 'react'
import { TodoForm } from './todo_components/TodoForm'
import { Todo } from './todo_components/Todo'

export class Todolist extends React.Component {
    state = {
        todos: []
    }

    addToDo = todo => {
        this.setState(state => {
            return {
                todos: [todo, ...state.todos]
            }
        })
    }

    toggleToDo = _todo => {
        this.setState(state => {
            return {
                todos: state.todos.map(todo => {
                    if (_todo.id === todo.id) {
                        return {
                            id: todo.id,
                            name: todo.name,
                            complete: _todo.complete
                        }
                    } else {
                        return todo
                    }
                })
            }
        })
    }

    render() {
        return (
            <div>
                <h2>To Do List</h2>
                <TodoForm addToDo={this.addToDo} />
                {this.state.todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            complete={todo.complete}
                            name={todo.name}
                            toggleToDo={this.toggleToDo}
                        />
                    )
                })}
            </div>
        )
    }
}
