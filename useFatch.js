const div = document.getElementById('container');
const button=document.getElementById('button')

console.log(div);
async function display(){
    const serverdata =await fetch("https://fakestoreapi.com/products");
    const data= serverdata.json()
    console.log(data);
    

}
button.addEventListener('click',display)

