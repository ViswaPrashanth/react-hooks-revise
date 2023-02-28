import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectDataFetching = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <p>{post.title}</p>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default UseEffectDataFetching;