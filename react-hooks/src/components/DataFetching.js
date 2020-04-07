import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    },[idFromButtonClick])
    return (
        <div>
            <input type="text" 
                value={id} 
                onChange={e => setId(e.target.value)}
            />
            <button onClick={() => setIdFromButtonClick(id)}>Get Data</button>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching
