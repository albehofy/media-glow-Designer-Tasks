const addingTask = document.getElementById("adding-task"); 
const activities = document.getElementById("actives"); 
const designs = document.getElementById("designs"); 
const price = document.getElementById("price"); 
let table = document.getElementById("results");
let results = ``;
coasts=''
let totalCoast = 0;
const designerName = document.getElementById("designerName");
const designerNameText = document.getElementById("designerNameText");


addingTask.addEventListener("click",()=>{
    if(activities.value && designs.value && price.value){

        results +=`
        <tr class="task-active">
        <td class="text-center" scope="row">${activities.value}</td>
        <td class="text-center">${designs.value}</td>
        <td class="text-center">${price.value}</td>
        <td class="text-center total-coast">${Number(price.value)* Number(designs.value)}</td>
        </tr>
        `
    }else {
        alert("ادخل البيانات بطريقة صحيحة")
    }
    window.setTimeout(()=>{
        totalCoast = 0;
        coasts = document.querySelectorAll('.total-coast')
        coasts.forEach(coast=>{
            totalCoast += Number(coast.innerText)
            allTotal.innerText = totalCoast;
        })
        console.log(totalCoast)
    },0)
    table.innerHTML = results;
})

designerName.addEventListener("blur",()=>{
    if(designerName.value) {
        if(confirm("اضافة الاسم")){
            designerNameText.innerText = designerName.value;
            designerName.style.display= 'none'
        }
    }
})

document.querySelector('#print').addEventListener('click',()=>{
    window.print()
})