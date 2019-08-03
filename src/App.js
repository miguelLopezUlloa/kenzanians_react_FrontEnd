/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import './styles/bootstrap.min.css';
import Employees from './components/Employees'
import Pagination from './components/Pagination'

class App extends Component {

    render() {
        return <div className="app container">

            <div className="jumbotron">

                <p className="lead text-center">Kenzanians registration </p>

                <div class="form-group has-success">

                    <label class="form-control-label" for="inputSuccess1">Name</label>
                    <input type="text" value="correct value" class="form-control is-valid" id="inputValid1"/>
                        <div class="valid-feedback">Success! You've done it.</div>

                    <label class="form-control-label" for="inputSuccess2">Last name</label>
                    <input type="text" value="correct value" class="form-control is-valid" id="inputValid2"/>
                        <div class="valid-feedback">Success! You've done it.</div>

                </div>


            </div>

            <Employees/>

            <Pagination/>

            </div>

    }
}

export default App;
