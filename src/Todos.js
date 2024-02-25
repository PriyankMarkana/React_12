import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';


function Todos() {
    let [todo,settodo]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                settodo(response.data)
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
                <th>Completed</th>
            </tr>
            {
                todo.map((ele,ind)=>{
                    return(
                        <tr key={ind}>
                            <td>{ele.userId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.completed}</td>
                        </tr>
                    )
                })
            }
        </table>
    </>
  )
}

export default Todos;
