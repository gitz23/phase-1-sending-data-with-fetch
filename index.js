// Add your code here
// document.addEventListener('DOMContentLoaded', function submitData(name, email){

//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//         },
//         body: JSON.stringify({
//             name,
//             email,
//         })
//     })
//     .then(resp => resp.json())
//     .then(data => console.log(data))
// });


function submitData(name, email){
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
        })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error)
        console.error("Error:", error);
}


