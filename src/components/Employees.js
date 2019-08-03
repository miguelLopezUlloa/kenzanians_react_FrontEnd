import React, { Component } from 'react';
import EmployeeDataService from '../service/EmployeeDataService';

class Employees extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            message: null
        }

        this.refreshEmployees = this.refreshEmployees.bind(this)
        this.deleteEmployeeClicked = this.deleteEmployeeClicked.bind(this)
    }

    componentDidMount() {
        this.refreshEmployees();
    }

    refreshEmployees() {

        EmployeeDataService.retrieveAllEmployees()
            .then(
                response => {
                    console.log(response);
                    this.setState({ employees: response.data })
                }
            )
    }


    deleteEmployeeClicked(id) {
        EmployeeDataService.deleteEmployee(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Delete of Employee ${id} Successful` })
                    this.refreshEmployees()
                }
            )

    }


    render(){
        return(

            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Middle name</th>
                        <th>email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.employeeName}</td>
                                    <td>{employee.last_name}</td>
                                    <td>{employee.middle_name}</td>
                                    <td>{employee.email}</td>


                                    <td>
                                        <button type="button" class="btn btn-outline-success">Edit</button>
                                    </td>

                                    <td>
                                        <button type="button" class="btn btn-outline-danger" onClick={() => this.deleteEmployeeClicked(employee.id)}>Delete</button>
                                    </td>

                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )

    }
}

export default Employees


