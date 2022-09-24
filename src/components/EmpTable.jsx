import { useEffect } from "react"
import { useState } from "react";


const getAllEmployeeAPI = "http://192.168.1.88:8080/employee/all";
export default function EmpTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(getAllEmployeeAPI, requestOptions)
            .then(response => {
                return response.json();

            })
            .then(data => {
                let table = data.map((emp, count) =>
                    <tr key={count}>
                        <th scope="row">{count}</th>
                        <td>{emp.name}</td>
                        <td><button className="btn btn-primary" >Update</button></td>
                        <td><button className="btn btn-primary">Delete</button></td>
                    </tr>
                );
                setData(table)
            })
    }, []);

    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>{data}</tbody>
        </table>
    )
}





