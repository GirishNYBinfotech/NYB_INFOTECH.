function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({ id:101,name:"Girish",loc:"Hyd"})
        },2000)
    })
}
async function displayUser(){
    const user = await getUser()
    const {id,name,loc}=user
    console.log("id:",id)
    console.log("name:",name)
    console.log("location:",loc)
}
displayUser()