import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';



function Albums() {
    let [alb,setalb]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setalb(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[])
  return (
    <>
    <Home></Home>
    <table border={1}>
            <tr>
                <th>userId</th>
                <th>Id</th>
                <th>Title</th>
            </tr>
            {
                alb.map((ele,ind)=>{
                    return(
                        <tr key={ind}>
                            <td>{ele.userId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                        </tr>
                    )
                })
            }
        </table>
    </>
  )
}

export default Albums;
