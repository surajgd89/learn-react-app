
import { Table } from 'react-bootstrap'

function ArrayListWithList() {
    // const students = ['Suraj', 'Kajal', 'Shreesha', 'Shubham'];
    const students = [
        { name: "Suraj", email: "suraj.gd89@gmail.com", mobile: 9594415153 },
        { name: "Kajal", email: "kajal.gd97@gmail.com", mobile: 8693818780 },
        { name: "Shreesha", email: "shreesha@gmail.com", mobile: 90499595801 },
        { name: "Shubham", email: "shubhampatil@gmail.com", mobile: 9673851405 }
    ];

    return (
        <div className="text-center">
            <h1>Handle Array With List</h1>
            <Table striped bordered hover variant="light ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((data, index) =>

                        data.name === "Kajal" ?
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.mobile}</td>
                            </tr>
                            : null


                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default ArrayListWithList;