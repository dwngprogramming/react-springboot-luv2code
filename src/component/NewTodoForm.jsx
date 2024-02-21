import React, {useState} from "react";

function NewTodoForm(props) {
    // Tạo ra state
    const [description, setDescription] = useState("");
    const [assigned, setAssigned] = useState("");

    const descriptionChange = e => {
        setDescription(e.target.value);
    }

    const assignedChange = e => {
        setAssigned(e.target.value);
    }

    // Function to validate
    const submitTodo = () => {
        if (description !== "" && assigned !== "") {
            // Gọi lại hàm trong component cha từ component con thông qua props
            props.addTodo(description, assigned);
            // Sau khi thêm Todos thành công, set input trở lại rỗng
            setDescription("");
            setAssigned("");
        } else {
            alert("Must input! Not blank!")
        }
    }

    return (
        <div className="mt-5">
            <form action="">
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" onChange={assignedChange} value={assigned} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea rows="3" className="form-control" onChange={descriptionChange} value={description} required></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todos</button>
            </form>
        </div>
    );
}

export default NewTodoForm;