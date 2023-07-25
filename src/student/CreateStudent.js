import {useEffect, useState} from "react";
import * as Yup from "yup";
import axios from "axios";
import {storage} from "../filebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

const CreateStudent = () => {
    const [address, setAddress] = useState([]);
    const navigate = useNavigate()

    const initialValues = {
        name: "",
        age: "",
        image: "",
        address: "",
        gender: "",
        email: "",
        avgPoint: "",

    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required").matches(/[A-Za-z]+/, "Name not contain number"),
        age: Yup.number().min(18, "Min age is 18").max(60, "Max age is 60").required("Age is required"),
        address: Yup.string().required("Address is required"),
        avgPoint: Yup.number().required("Avg Point is required").positive("Must be positive").min(0).max(10),
        gender: Yup.string().required("Gender is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
    });

    const getAddress = () => {
        axios.get(`http://localhost:8080/api/addresses`).then((res) => {
            setAddress(res.data);
        });
    };
    useEffect(() => getAddress(), []);


    const handleSubmit = async (values) => {
        values.address = {
            id: values.address
        };

        let file = document.getElementById("image").files[0];
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            () => {
            },
            () => {
                alert("error");
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    values.image = downloadURL;
                    axios.post("http://localhost:8080/api/students", values);
                    alert("Student created successfully");
                    navigate('/');
                })
            }
        );

    };

    return (
        <>
            <h1 className={`h1`}>Add new student</h1>
            <div className={"form-create"}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form encType="multipart/form-data">
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">
                                Name
                            </label>
                            <div className="col-sm-10">
                                <Field type="text" name="name" className="form-control"/>
                                <ErrorMessage name="name" component="div" className="text-danger"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="age" className="col-sm-2 col-form-label">
                                Age
                            </label>
                            <div className="col-sm-10">
                                <Field type="number" name="age" className="form-control"/>
                                <ErrorMessage name="age" component="div" className="text-danger"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="avgPoint" className="col-sm-2 col-form-label">
                                Avg
                            </label>
                            <div className="col-sm-10">
                                <Field type="number" name="avgPoint" className="form-control"/>
                                <ErrorMessage name="avgPoint" component="div" className="text-danger"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-10">
                                <Field type="email" name="email" className="form-control"/>
                                <ErrorMessage name="email" component="div" className="text-danger"/>
                            </div>
                        </div>


                        <div className="mb-3 row">
                            <label htmlFor="gender" className="col-sm-2 col-form-label">
                                Gender
                            </label>
                            <div className="col-sm-10">
                                <Field as="select" name="gender" className="form-select"
                                       aria-label="Default select example">
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Field>
                                <ErrorMessage name="gender" component="div" className="text-danger"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="address" className="col-sm-2 col-form-label">
                                Address
                            </label>
                            <div className="col-sm-10">
                                <Field as="select" name="address" className="form-select"
                                       aria-label="Default select example">
                                    <option value="">Select address</option>
                                    {address.map((item) =>
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    )}
                                </Field>
                                <ErrorMessage name="address" component="div" className="text-danger"/>
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">
                                Choose image
                            </label>
                            <Field type="file" name="image" id="image" className="form-control"/>
                            <ErrorMessage name="image" component="div" className="text-danger"/>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{width: 400, marginLeft: 200}}>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    );


}
export default CreateStudent;