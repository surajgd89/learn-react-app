
function UsersTable(props) {
    return (
        <tr key={props.id} data-id={'user_' + props.id}>
            <td className="text-left">{props.data.name}</td>
            <td className="text-left">{props.data.email}</td>
            <td className="text-left">{props.data.mobile}</td>
        </tr>
    )
}

export default UsersTable;