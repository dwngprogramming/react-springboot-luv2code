import './App.css';
import TodoTable from "./component/TodoTable";

function App() {
    const todos = [
        {rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "user1"},
        {rowNumber: 2, rowDescription: "Water plant", rowAssigned: "user2"},
        {rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "user1"},
        {rowNumber: 4, rowDescription: "Charge phone battery", rowAssigned: "user1"},
    ];

    const addTodo = () => {
        if (todos.length > 0) {
            const newTodo = {
                rowNumber: todos.length + 1,
                rowDescription: "New Todo",
                rowAssigned: "User 3"
            };
            todos.push(newTodo);
            console.log(todos);
        }
    }

    return (
        <div className={"mt-5 container"}>
            <div className={"card"}>
                <div className={"card-header"}>
                    Your To do
                </div>
                <div className={"card-body"}>
                    <TodoTable todos={todos}/>
                    <button className={"btn btn-primary"} onClick={addTodo}>
                        Add new todos
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
