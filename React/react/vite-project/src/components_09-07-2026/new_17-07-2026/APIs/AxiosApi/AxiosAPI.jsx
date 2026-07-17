import { useState } from "react";
import { axiosInstance } from "./Api";


function AxiosAPI(){

    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    async function getPosts(){
        setLoading(true);
        setError("");

        //Get
        try{
            const response=await axiosInstance.get("/posts");
            setPosts(response.data.slice(0,5));
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);

        }

    }

    //post
    async function addPost(){
        const response=await axiosInstance.post("/posts",{
            title:"Axios",
            body:"Axios POST",
            userId:1
        });
        alert("POST Success");
        console.log(response.data);
    }

    //PUT
    async function updatePost(){
        const response=await axiosInstance.put("/posts/1",{
            id:1,
            title:"PUT Updated",
            body:"PUT Body",
            userId:1
        });

        alert("PUT Success");

        console.log(response.data);

    }

    //Patch
    async function patchPost(){
        const response=await axiosInstance.patch("/posts/1",{
            title:"PATCH Updated"
        });
        alert("PATCH Success");
        console.log(response.data);
    }

    //Delete
    async function deletePost(){
        await axiosInstance.delete("/posts/1");
        alert("DELETE Success");
    }

    return(
        <div>
            <h2>Axios</h2>
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

export default AxiosAPI;