import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListStudent() {
    const [students, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/students").then((res) => {
            setStudent(res.data)
        })
    }, [])
    return (
        <>
            <div className={`content`}>
                <h1 className={`h1`}>List Students</h1>
                <table className={`table table-hover`} id={`inner-content`}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {students.map((student, index) =>
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.email}</td>
                            <td>{student.address.name}</td>
                            <td>
                                <Link to={`/views/${student.id}`} className={"btn btn-info"}>Detail</Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}