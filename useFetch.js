const div=document.getElementById('container')
const button=document.getElementById('btn')
// console.log(div);
const h2 = document.createElement('h2');
h2.innerText = "Data is loading.....";
console.log(h2);
function Cart(item_id){
    console.log("item with id:",item_id);

    alert("cart is calling")
}
async function display(){
    try{
        // div.innerHTML='<h2>Hello Using DOM</h2>';
        div.appendChild(h2);
        const serverdata=await fetch('https://fakestoreapi.com/products');
        const jsonData= await serverdata.json();
        // console.log(jsonData[1].title)
        // div.innerHTML=`<h2 style="color: blue;">${JSON.stringify(jsonData)}</h2>`;
        let table=`<table border=4px>
        <tr><th>Image</th><th>item_id</th><th>item_title</th><th>item_price</th><th>CART</th</tr>
        ${
            jsonData.map((ele)=>(
                `<tr>
                <td><img src=${ele.image} height=200 width=200/></td>
                
                <td>${ele.id}</td>
                <td>${ele.title}</td>
                <td>${ele.price}</td>
                <td><button onclick="addtocart(${ele.id})">Add to Cart</button></td>
                    </tr>`
            ))
        }
        </table>`
        div.innerHTML=table;
    } catch (e) {
        console.log('Error fetching data:', e);
    }finally{
}
}
button.addEventListener('click',display);