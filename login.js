const nameInput = document.getElementById('nameInput');
console.log(nameInput);
let user='';

const setName = (e) => {
    console.log(e);
    if(e.data!=null){
        user=user+e.data;
    } 
    console.log(user);
}


nameInput.addEventListener('input',setName);




