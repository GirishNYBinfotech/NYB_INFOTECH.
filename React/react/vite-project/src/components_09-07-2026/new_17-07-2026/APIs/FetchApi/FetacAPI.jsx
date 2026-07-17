import { useState } from "react";

function FetchAPI() {
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const baseURL="https://jsonplaceholder.typicode.com/posts";

    // GET
    async function getPosts(){
        setLoading(true);
        setError("");
        try{
            const response=await fetch(baseURL);
            if(!response.ok){
                throw new Error("Failed to fetch");
            }
            const data=await response.json();
            setPosts(data.slice(0,5));

        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    // POST
    async function addPost(){
        const newPost={
            title:"React",
            body:"Fetch API Example",
            userId:1
        };
        const response=await fetch(baseURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newPost)
        });
        const data=await response.json();
        alert("POST Success");
        console.log(data);
    }
    // PUT
    async function updatePost(){
        const response=await fetch(`${baseURL}/1`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id:1,
                title:"Updated Title",
                body:"Updated Body",
                userId:1
            })
        });
        const data=await response.json();
        alert("PUT Success");
        console.log(data);
    }
    // PATCH
    async function patchPost(){
        const response=await fetch(`${baseURL}/1`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:"Only Title Updated"
            })
        });
        const data=await response.json();
        alert("PATCH Success");
        console.log(data);
    }
    // DELETE
    async function deletePost(){
        await fetch(`${baseURL}/1`,{
            method:"DELETE"
        });
        alert("DELETE Success");
    }
    return(
        <div>
            <h2>Fetch API</h2>
            <button onClick={getPosts}>GET</button>
            <button onClick={addPost}>POST</button>
            <button onClick={updatePost}>PUT</button>
            <button onClick={patchPost}>PATCH</button>
            <button onClick={deletePost}>DELETE</button>
            <br/><br/>
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {
                posts.map(post=>(
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                    </div>
                ))
            }
        </div>
    )
}
export default FetchAPI;