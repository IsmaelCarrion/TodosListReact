const TodoForm = ({addTodo}) => {

    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        //prevent reloading of the page
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <>
            <form onSubmit= {handleSubmit}>
               <div>
                    <input
                        type = "text"
                        className = "input"
                        value = {value}
                        placeholder = "Next Todo..."
                        onChange = {e => setValue(e.target.value)}
                    />
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button" onClick={handleSubmit}>Add ToDo</button>
                    </div>
                </div>
            </form>
        </>
    );

}


