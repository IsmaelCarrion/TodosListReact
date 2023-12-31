const App = () => {
    
    const [todos, setTodos] = React.useState(
        [
            {text: 'Learn React', isCompleted: false},
            {text: 'Meet friend for lunch', isCompleted: false},
            {text: 'Build todo app', isCompleted: false}
        ]
    );

    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted: false}];
        setTodos(newTodos);
    }

    //this function removes a todo from the list when the item is clicked.
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }

    return (
            <div className="app">
                <div className="todo-list">
                    {todos.map((todo,index) => 
                        <Todo index={index} key={index} todo={todo} remove={removeTodo}/>)}
                    <TodoForm addTodo={addTodo}/>
                </div>
            </div>    
            );
}

ReactDOM.render(<App/>, document.getElementById('root'))


