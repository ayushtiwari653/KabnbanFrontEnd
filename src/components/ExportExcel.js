import React, { Component } from 'react'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import * as Constants from './Constants';


export class ExportExcel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ProductData: []
        }
    }
    componentDidMount() {
        axios.get(Constants.GET_ALL_TASK).then(response => {
            console.log(response.data);
            this.setState({
                ProductData: response.data
            });
        });
    }
    render() {
        return (
            <div>
                <table id="emp" class="table">
                    <thead>
                        <tr>
                            <th>Task Id</th>
                            <th>Project Id</th>
                            <th>Assign To</th>
                            <th>Task Details</th>
                            <th>Task Status Id</th>
                            <th>Assign By</th>
                        </tr>
                    </thead>
                    <tbody>              {
                        this.state.ProductData.map((p, index) => {
                            return <tr key={index}>
                                <td>
                                    {p.tId}
                                </td>
                                <td >{p.pId}</td>
                                <td >{p.assignTo}</td>
                                <td >{p.taskDetails}</td>
                                <td >{p.taskStatusId}</td>
                                <td >{p.assignBy}</td>
                                
                                <td style={{ paddingRight: "114px" }} >{p.Department}</td>
                            </tr>
                        })
                    }

                    </tbody>

                </table>
                <div>
                    <ReactHTMLTableToExcel
                        className="btn btn-outline-primary align-center" 
                        table="emp"
                        filename="ReportExcel"
                        sheet="Sheet"

                        buttonText="Export excel" />
                </div>
            </div>
        )
    }
}

export default ExportExcel  