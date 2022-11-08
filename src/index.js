let userNev = [];


document.addEventListener('DOMContentLoaded',() => {

    document.getElementById('userName').addEventListener('click', async () => 
    {
        felhasznaloNev()
    })
   
})
async function felhasznaloNev(){
    let response = await fetch("users.json");
    let result = await response.json();

    userNev.textContent = ' '

    for(let p of result.users){
        let li = document.createElement('li')
        li.textContent= p.firstName + " - " + p.lastName
        document.getElementById('adatok').appendChild(li)
    }
}