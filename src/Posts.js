import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Home from './Home';

function Posts() {
    let [post,setpost]=useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                // console.log(response);
                setpost(response.data)
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
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            {
                post.map((ele,ind)=>{
                    return(
                        <tr key={ind}>
                            <td>{ele.userId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.body}</td>
                        </tr>
                    )
                })
            }
        </table>
        </>
    )
}

export default Posts;
