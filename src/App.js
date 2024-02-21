import React, {useState} from "react";
import './App.css';
import TodoTable from "./component/TodoTable";
import NewTodoForm from "./component/NewTodoForm";

function App() {
    const [showAddTodoForm, setShowAddTodoForm] = useState(false);

    const [todos, setTodos] = useState([
        {rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "user1"},
        {rowNumber: 2, rowDescription: "Water plant", rowAssigned: "user2"},
        {rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "user1"},
        {rowNumber: 4, rowDescription: "Charge phone battery", rowAssigned: "user1"},
    ]);

    // Thêm todos
    const addTodo = (description, assigned) => {
        let rowNumber = 0;
        // Kiểm tra xem có tồn tại phần tử nào trong todos chưa, nếu chưa thì rowNumber = 1,
        // nếu đã có thì lấy vị trí giá trị todos hiện tại + 1
        rowNumber = (todos.length > 0) ? todos[todos.length - 1].rowNumber + 1 : 1;

        const newTodo = {
            rowNumber: rowNumber,
            rowDescription: description,
            rowAssigned: assigned
        };
        setTodos(todos => [...todos, newTodo])
    }

    // Xóa todos
    const deleteTodo = (rowNumToDelete) => {
        // Filter các rowNumber khác rowNumToValue để lấy mảng mới
        let filter = todos.filter((value) => {
            return value.rowNumber !== rowNumToDelete;
        });
        setTodos(filter);
    }

    return (
        <div className={"mt-5 container"}>
            <div className={"card"}>
                <div className={"card-header"}>
                    Your To do
                </div>
                <div className={"card-body"}>
                    <TodoTable todos={todos} deleteTodo={deleteTodo}/>
                    <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className={"btn btn-primary"}>
                        {showAddTodoForm ? "Close New Todo" : "New Todo"}
                    </button>
                    {/*Render React Component có điều kiện*/}
                    {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>}
                </div>
            </div>
        </div>
    );
}

export default App;
