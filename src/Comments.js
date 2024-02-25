import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';


function Comments() {
    let [comment,setcomment]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setcomment(response.data)
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
                <th>PostId</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
            {
                comment.map((ele,ind)=>{
                    return(
                        <tr key={ind}>
                            <td>{ele.postId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.body}</td>
                        </tr>
                    )
                })
            }
        </table>
    </>
  )
}

export default Comments;
