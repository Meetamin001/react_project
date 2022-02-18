import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const apiUrl = "http://localhost:64057/api/Employee";

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            employee: [],
            response: {}
        };
    }

    componentDidMount() {
        axios.get(apiUrl + 'GetEmployeeDetails').then(response => response.data)
            .then(
                (result) => {
                    this.setState({
                        employee: result
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            );
    }

    render() {
        const { error, employee } = this.state;

        if (error) {
            return (
                <div>
                    Error: { error.message }
                </div>
            );

        }
        else {
            return (
                <div>
                    <Table className="table table-striped">
                        <thead className="btn-success">
                            <tr>
                                <th>Employee Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Dependants</th>
                                <th>Additions</th>
                                <th>CPP</th>
                                <th>EI</th>
                                <th>Gross salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            { employee.map((employee) => {
                                <tr key={ employee.emp_id } >
                                    <td>{ employee.emp_name }</td>
                                    <td>{ employee.emp_email }</td>
                                    <td>{ employee.emp_gender }</td>
                                    <td>{ employee.noOfDependants }</td>
                                    <td>{ employee.Additions }</td>
                                    <td>{ employee.ITex }</td>
                                    <td>{ employee.CPP }</td>
                                    <td>{ employee.EI }</td>
                                    <td>{ employee.FinalSalary }</td>
                                </tr>;
                            })
                            }

                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}


export default EmployeeList;