function TodoRowItem(props) {
    return (
        // Lớp con sử dụng được hàm deleteTodo từ lớp
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope={'row'}>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem