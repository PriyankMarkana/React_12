import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';


function Users() {
    let [usr,setusr]=useState([]);
    let [usr1,setusr1]=useState([]);
    let [usr2,setusr2]=useState([]);
    let [usr3,setusr3]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setusr(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[])
  return (
    <>
    <Home></Home>
    <table className='tbl'>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>userName</th>
                <th>Email</th>
                <th>Address
                    <table>
                        <tr>
                            <th>street</th>
                            <th>suite</th>
                            <th>city</th>
                            <th>Zipcode</th>
                            <th>geo
                                <table>
                                    <tr>
                                        <th>lat</th>
                                        <th>lng</th>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                    </table>
                </th>
                <th>Phone</th>
                            <th>Website</th>
                            <th>Company
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>catchPhrase</th>
                                        <th>bs</th>
                                    </tr>
                                </table>
                            </th>
            </tr>
            {
                usr.map((ele,ind)=>{
                    return(
                        <tr key={ind}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.username}</td>
                            <td>{ele.email}</td>
                            <td>
                                <table>
                                    <tr>
                                        <td>{ele.address.street}</td>
                                        <td>{ele.address.suite}</td>
                                        <td>{ele.address.city}</td>   
                                        <td>
                                            <table>
                                                <tr>
                                                    <td>{ele.address.geo.lat}</td>
                                                    <td>{ele.address.geo.lng}</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td>{ele.phone}</td>
                            <td>{ele.website}</td>
                            <td>
                                <table>
                                    <tr>
                                        <td>{ele.company.name}</td>
                                        <td>{ele.company.catchPhrase}</td>
                                        <td>{ele.company.bs}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
    </>
  )
}

export default Users;
