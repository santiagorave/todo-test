export async function patchTask(id){
    const response = await fetch(`http://localhost:8080/tasks/${id}/status`,{
        method: 'PATCH',
         headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(true)
    }).catch(error => {
        console.log(error)
    })
}