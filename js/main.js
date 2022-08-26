
var products=[]

if(products.length==0)
{
    products=JSON.parse(localStorage.getItem('x'))
    console.log(products)
    display()
}

var Name=document.getElementById('name')
var cate=document.getElementById('cate')
var price=document.getElementById('price')
var desc=document.getElementById('desc')
var tbody = document.getElementById('demo')


//Saving Data
function getData()
{
    var product={
        Name:Name.value,
        cate:cate.value,
        price:price.value,
        desc:desc.value,
    }
    products.push(product)
    localStorage.setItem('x',JSON.stringify(products))
    display()
    clear()
    console.log(products)
    
}


//Display Data
function display()
{
   var x=``
   for(var i=0;i<products.length;i++)
   { 
    x+=`
    <tr>
    <td onclick="Update(${i},'Name')">${products[i].Name}</td>
    <td onclick="Update(${i},'cate')">${products[i].cate}</td>
    <td onclick="Update(${i},'price')">${products[i].price}</td>
    <td onclick="Update(${i},'desc')">${products[i].desc}</td>
    <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
    <td><button onclick="displayedit()" class="btn btn-info">Edit</button></td> 
    </tr>
    `
   }
    console.log(products)
    document.getElementById('demo').innerHTML=x
   
}



//Delete
function Delete(index)
{
    products.splice(index,1)
    display()
    // console.log(products)
}


//Clear
function clear()
{
    Name.value=""
    cate.value=""
    price.value=""
    desc.value=""
}


//Search
function search(searchInput)
{
   var box=``
for(var i=0;i<products.length;i++)
{
   curproducts=products[i]
   for(const [key,value] of Object.entries(curproducts))
   {
    if(value.includes(searchInput))
    {
        box+=`
        <tr>
        <td>${curproducts.Name.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
        <td>${curproducts.cate.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
        <td>${curproducts.price.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
        <td>${curproducts.desc.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
        <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
        <td><button onclick="displayedit()" class="btn btn-info">Edit</button></td> 
        </tr>
        `
        break
    }
   } 
}
  document.getElementById('demo').innerHTML=box
}



//Validation 
var pattern=/^[A-Z]{1}[a-z]{2,}$/
function validationName(data)
{
   if(pattern.test(data)==true)
   {
    document.getElementById('alert_id').style.display="none"
   }
   else
   {
    document.getElementById('alert_id').style.display="block"
   }

}

var pattern1=/(?:^[1-9]([1-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/
function validationPrice(data1)
{
   if(pattern1.test(data1)==true)
   {
    document.getElementById('alert_id1').style.display="none"
   }
   else
   {
    document.getElementById('alert_id1').style.display="block"
   }

}

function displayedit(){
    document.getElementById('update_new_id').style.display="block"
}


//Update
function Update(index,key)
{
    var newone=document.getElementById('newData').value
    products[index][key]=newone
    display()
}











   








// for(const [key,value] of Object.entries(customers[i])){
//     console.log(value);
//     if(value.includes(searchInput)){
//         box+=`
//         <tr>
//         <td>${customers[i].Name.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
//         <td>${customers[i].Device_Type.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
//         <td>${customers[i].SN.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
//         <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
//         <td><button onclick="Update(${customers[i].Name})" class="btn btn-info">Update</button></td> 
//         </tr>
//         `
//     }       
// }

 









   