import { Table } from 'react-bootstrap';

import UsersTable from '../components/UsersTable';

function ReuseComponent() {
    const users = [
        { name: 'Suraj', email: 'suraj@test.com', mobile: 1234567890 },
        { name: 'Arshad', email: 'arshad@test.com', mobile: 1234567890 },
        { name: 'yogesh', email: 'yogesh@test.com', mobile: 1234567890 },
    ];

    return (
        <div className="text-center">
            <h1>Reuse Component with List</h1>

            <Table variant="light" striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-left">Name</th>
                        <th className="text-left">Email</th>
                        <th className="text-left">Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, i) => (
                        <UsersTable data={item} id={i} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ReuseComponent;
