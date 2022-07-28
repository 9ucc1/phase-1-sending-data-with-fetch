// Add your code here
function submitData(firstName, userEmail){
fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        "name": firstName,
        "email": userEmail,
    })
}
)
.then(res => res.json())
.then(body => addNewData(body.id))
.catch(error => document.body.innerHTML = error.message)
}
function addNewData(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID
}
submitData()