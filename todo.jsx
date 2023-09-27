const Todo = ({todo, index, remove}) => {
 
    const handle = () => remove(index);

    return (
        <>
            <div class = "container text center">
                <div class = "row">
                    <div class = "col">
                        <div className ="todo" onClick={handle}>{todo.text}</div>
                    </div>
                    <div class = "col">
                        <button type="button" class="btn btn-outline-danger" onClick={handle}>Delete</button>
                    </div>   
                </div>
            </div>
        </>
    );
}

