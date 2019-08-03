import axios from 'axios';

const EMPLOYEE_API_URL = 'http://localhost:8080'
const ACTIVES_API_URL = `${EMPLOYEE_API_URL}/employee_active/`

class EmployeeDataService {

    retrieveAllEmployees() {
        return axios.get(`${ACTIVES_API_URL}`);
    }

    deleteEmployee(id) {
        console.log('executing Delete service')
        return axios.delete(`${EMPLOYEE_API_URL}/employee/${id}`,
        {
            method: 'delete',
            crossDomain: true,
            withCredentials: true,
            data: {
                "username": "admin",
                "password": "password"
            },
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin' : 'http://localhost:3000',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH',
            },
            responseType: 'json',
        }).then(response => {
            console.log("ERROR IN AXIOS DELETE OPERATION:" + response);
            }
        );
    }
}

export default new EmployeeDataService()