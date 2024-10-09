export async function updateTasks(id,name,desc,tag){
    const response = await fetch(`http://localhost:8080/tasks/${id}`,{
        method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({name:name,description:desc,tag:tag })
         
    }).catch(error => {
        console.log(error)
    })
}