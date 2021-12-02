
import { Table } from 'react-bootstrap'

function NestedList() {
    // const students = ['Suraj', 'Kajal', 'Shreesha', 'Shubham'];
    const students = [
        {
            name: "Suraj",
            email: "suraj.gd89@gmail.com",
            mobile: 9594415153,
            address: [
                {
                    houseNo: 101,
                    city: "Noida",
                    country: "India",
                    state: "Maharashtra"
                },
                {
                    houseNo: 102,
                    city: "Delhi",
                    country: "India",
                    state: "Maharashtra"
                },
                {
                    houseNo: 103,
                    city: "Mumbai",
                    country: "India",
                    state: "Maharashtra"
                }
            ]
        },
        {
            name: "Kajal",
            email: "kajal.gd97@gmail.com",
            mobile: 8693818780,
            address: [
                {
                    houseNo: 201,
                    city: "Noida",
                    country: "India",
                    state: "Maharashtra"
                },
                {
                    houseNo: 202,
                    city: "Delhi",
                    country: "India",
                    state: "Maharashtra"
                },
                {
                    houseNo: 203,
                    city: "Mumbai",
                    country: "India",
                    state: "Maharashtra"
                }
            ]
        },
        {
            name: "Shreesha",
            email: "shreesha@gmail.com",
            mobile: 8450959594,
            address: [
                {
                    houseNo: 301,
                    city: "Noida",
                    country: "India",
                    state: "Maharashtra"
                },
                {
                    houseNo: 302,
                    city: "Delhi",
                    country: "India",
                    state: "Maharashtra"
                },
                {
                    houseNo: 303,
                    city: "Mumbai",
                    country: "India",
                    state: "Maharashtra"
                }
            ]
        },
        {
            name: "Shubham",
            email: "shubhampatil@gmail.com",
            mobile: 9673851405,
            address: [
                {
                    houseNo: 401,
                    city: "Noida",
                    country: "India",
                    state: "Maharashtra"
                },
                {
                    houseNo: 402,
                    city: "Delhi",
                    country: "India",
                    state: "Maharashtra"
                },
                {
                    houseNo: 403,
                    city: "Mumbai",
                    country: "India",
                    state: "Maharashtra"
                }
            ]
        }
    ];

    return (
        <div className="text-center">
            <h1>Nested List With Nested Array</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className="text-left">Name</th>
                        <th className="text-left">Email</th>
                        <th className="text-left">Mobile</th>
                        <th className="text-left">Address</th>
                    </tr>

                </thead>
                <tbody>
                    {students.map((item, index) =>
                        <tr key={index} item-index={"item_" + index}>
                            <td className="text-left">{item.name}</td>
                            <td className="text-left">{item.email}</td>
                            <td className="text-left">{item.mobile}</td>
                            <td>
                                <Table striped bordered hover variant="dark" className="mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-left">House No.</th>
                                            <th className="text-left">City</th>
                                            <th className="text-left">Country</th>
                                            <th className="text-left">State</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.address.map((data, nesIndex) =>
                                            <tr key={nesIndex} data-index={"data_" + nesIndex}>
                                                <td className="text-left">{data.houseNo}</td>
                                                <td className="text-left">{data.city}</td>
                                                <td className="text-left">{data.country}</td>
                                                <td className="text-left">{data.state}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>

                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default NestedList;