let userNev = [];
let sulyOsszeg = 0;


document.addEventListener('DOMContentLoaded',() => {

    document.getElementById('name').addEventListener('click', async () => 
    {
        felhasznaloNev()
    })
    
    document.getElementById('userName').addEventListener('click', async () => 
    {
        tablazat()
    })

    document.getElementById('szamitas').addEventListener('click', async () => 
    {
        sulySzamitas(sulyOsszeg)
    })
   
    document.getElementById('szem').addEventListener('click', async () => 
    {
        barnaSzem()
    })
})
async function felhasznaloNev(){
    let response = await fetch("users.json");
    let result = await response.json();

    userNev.textContent = ' '
    result.users.sort((a, b) => a.lastName.localeCompare(b.lastName))
    for(let p of result.users){
        let li = document.createElement('li')
        li.textContent= p.lastName.toUpperCase() + " , " + p.firstName
        document.getElementById('adatok').appendChild(li)
    }
}

async function tablazat(){
        let response = await fetch('users.json')
        let result = await response.json()
    
      result.users.sort((a, b) => a.username.localeCompare(b.username))
    
    
        for (let u of result.users){
            
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            td1.textContent = u.username;
            td2.textContent = u.email;
            td3.textContent = u.phone;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tabla.appendChild(tr);
        }
}  

async function sulySzamitas(){

    let response = await fetch('users.json')
    let result = await response.json()
    var sum = 0;
    
    sulyOsszeg = parseInt(document.getElementById('magassag').value)

    let heights = result.users.filter(e => e.height >= sulyOsszeg)

    heights.forEach(element => {
        sum += element.weight
    });

    document.getElementById('sulyOsszeg').innerHTML = sum
}

async function barnaSzem(){
    let response = await fetch('users.json')
    let result = await response.json()


let sum = result.users.filter(e => e.eyeColor == 'Brown');
document.getElementById('barnaSzem').innerHTML = sum;

}
