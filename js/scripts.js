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
    AddingTasks();
    window.setTimeout(EditingData(),0)
});

designerName.addEventListener("blur",()=>{
    if(designerName.value) {
        if(confirm("اضافة الاسم")){
            designerNameText.innerText = designerName.value;
            designerName.style.display= 'none'
        }
    }
});

document.querySelector('#print').addEventListener('click',()=>{
    window.print()
});

function AddingTasks(){
    if(activities.value && designs.value && price.value){

        results +=`
        <tr class="task-active">
        <td class="text-center task-info" scope="row"><input type="text" class="designer-tasks" value="${activities.value}"></td>
        
        <td class="text-center task-value task-info">
        <input type="text" class='designer-tasks ' value='${designs.value}'> </td>

        <td class="text-center task-price task-info"> <input type="text" class='designer-tasks' value='${price.value}'></td>

        <td class="text-center total-coast">${Number(price.value)* Number(designs.value)}</td>
        </tr>
        `
    }else {
        alert("ادخل البيانات بطريقة صحيحة")
    }
    window.setTimeout(()=>{
        CalculatingCoast();   
    },0)
    table.innerHTML = results;
}

function CalculatingCoast(){
    totalCoast = 0;
        coasts = document.querySelectorAll('.total-coast')
        coasts.forEach(coast=>{
            totalCoast += Number(coast.innerText)
            allTotal.innerText = totalCoast;
        })
}

function EditingData() {
    document.querySelectorAll('.designer-tasks').forEach(task=>{
        task.addEventListener("blur",function(){
            console.log(this.value)
            this.setAttribute('value',this.value)
            let dataCell = this.parentNode;
            dataCell.parentNode.querySelector('.total-coast'); 
            dataCell.parentNode.querySelector('.total-coast').innerText = (dataCell.parentNode.querySelector('.task-value input').value) * (dataCell.parentNode.querySelector('.task-price input').value);
            window.setTimeout(()=>{
                CalculatingCoast();   
            },0);
            let res = document.getElementById('results');
            results =  table.innerHTML; 
            console.log(res);
        })
    })
}