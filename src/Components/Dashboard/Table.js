import React from 'react'
import classes from './Table.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'

const TableUpdate = (props) => {
    return (
        <React.Fragment>
            <div className={classes.Table}>
            <h1><span className={classes.blue}></span> <span class="yellow">Placement Updates</span></h1>
            <br />
            <Table striped responsive bordered hover variant="dark">
                <thead>
                    <tr>
                        <th><h1>Companies</h1></th>
                        <th><h1>Date</h1></th>
                        <th><h1>Job Title</h1></th>
                        <th><h1>Package</h1></th>
                        <th><h1>Job Description</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Google</td>
                        <td>01/04/2022</td>
                        <td>Software Developer Engineer-II</td>
                        <td>21 LPA</td>
                        <td>
                            <ul>
                            <li>NodeJS Developer</li>
                            <li>ReactJS Developer</li>
                            </ul>
                                <h3>Mandatory Skills</h3>
                            <ul>
                            <li>NodeJS Developer: NodeJS, Express.js, NoSQL/SQL</li>
                            <li>ReactJS Developer: ReactJS, Javascript, HTML, CSS</li>
                        </ul>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Google</td>
                        <td>01/04/2022</td>
                        <td>Software Developer Engineer-II</td>
                        <td>21 LPA</td>
                        <td>
                            <ul>
                            <li>NodeJS Developer</li>
                            <li>ReactJS Developer</li>
                            </ul>
                                <h3>Mandatory Skills</h3>
                            <ul>
                            <li>NodeJS Developer: NodeJS, Express.js, NoSQL/SQL</li>
                            <li>ReactJS Developer: ReactJS, Javascript, HTML, CSS</li>
                        </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>Google</td>
                        <td>01/04/2022</td>
                        <td>Software Developer Engineer-II</td>
                        <td>21 LPA</td>
                        <td>
                            <ul>
                            <li>NodeJS Developer</li>
                            <li>ReactJS Developer</li>
                            </ul>
                                <h3>Mandatory Skills</h3>
                            <ul>
                            <li>NodeJS Developer: NodeJS, Express.js, NoSQL/SQL</li>
                            <li>ReactJS Developer: ReactJS, Javascript, HTML, CSS</li>
                        </ul>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>

        </React.Fragment>
    )
}

export default TableUpdate