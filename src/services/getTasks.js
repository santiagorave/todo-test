export async function getTasks(){
    return await fetch("http://localhost:8080/tasks").then(async res=> await res.json());
}