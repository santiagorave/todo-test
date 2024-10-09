export async function postTasks(name,desc,tag){
    const response = await fetch("http://localhost:8080/tasks",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({name:name,description:desc, status:'Pending',tag:tag })
    })
}