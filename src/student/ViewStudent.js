import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ViewStudent() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        gender: "",
        avgPoint: 0,
        email: "",
        image: "",
        address: {
            name: "",
        }
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/students/${id}`)
            .then(res => {
                setStudent(res.data);
            })
    }, [id]);

    const deleteStudent = (id) => {
        if (window.confirm("Are you sure ?")) {
            axios.delete(`http://localhost:8080/api/students/${id}`)
                .then(() => {
                    navigate(`/`);
                })
        }
    };

    const getAcademicPerformance = (avgPoint) => {
        if (avgPoint >= 8) {
            return "Loại Giỏi";
        } else if (avgPoint >= 6.5) {
            return "Loại Khá";
        } else if (avgPoint >= 4.0) {
            return "Loại TB";
        } else {
            return "Loại Yếu";
        }
    };

    return (
        <>
            <div className={`profile`}>
                <h1 className={`h1`}>Student profile</h1>
                <hr/>
                <div className={`row`}>
                    <div className={`col-lg-5`}>
                        <table className={`table table-hover`}>
                            <tbody>
                            <tr>
                                <th colSpan={2}><img className={`image`} src={student.image}/></th>
                            </tr>
                            <tr style={{textAlign: "center"}}>
                                <th>
                                    <Link to={`/update/${student.id}`} className={"btn btn-warning"}>Update</Link>
                                </th>
                                <th>
                                    <button className={"btn btn-danger"}
                                            onClick={() => deleteStudent(student.id)}>Delete
                                    </button>
                                </th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`col-lg-7`}>
                        <table className={`table table-hover`} style={{marginTop: 22}}>
                            <tbody className={`tbody`}>
                            <tr>
                                <th>Name:</th>
                                <th>{student.name}</th>
                            </tr>
                            <tr>
                                <th>Avg Point:</th>
                                <th>{student.avgPoint}</th>
                            </tr>
                            <tr>
                                <th>Gender:</th>
                                <th>{student.gender}</th>
                            </tr>
                            <tr>
                                <th>Address:</th>
                                <th>{student.address.name}</th>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <th>{student.email}</th>
                            </tr>
                            <tr>
                                <th>Academic performance:</th>
                                <th>{getAcademicPerformance(student.avgPoint)}</th>
                            </tr>
                            <tr>
                                <th>
                                    <Link to={"/"} className="btn btn-info" id={`back`}>Back to home</Link>
                                </th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}