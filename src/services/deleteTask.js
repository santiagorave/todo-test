export async function deleteTasks(id){
    const response = await fetch(`http://localhost:8080/tasks/${id}`,{
        method: 'DELETE',
         headers: { 'Content-Type': 'application/json' }
    }).catch(error => {
        console.log(error)
    })
}