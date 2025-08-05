let employees=[];
function addEmp(id,name,salary=true)
{
    employees.push({id,name,salary});
    console.log("Employee addad",employees);
}
addEmp(1,"AK",15000)
addEmp(2,"Mark antony",20000)
addEmp(3,"Leo das",25000)

//to update emp
function updateEmp(id,newDetail){
    const emp=employees.find(e=>e.id === id)
    if (emp){
        Object.assign(emp, newDetail);
        console.log("update",employees)
    }else{
        console.log("employees not found")
    }
}
updateEmp(2,{name:"joe"});

//to delete

function removeEmp(id){
    const index = employees.findIndex((e) => e.id === id);
    if(index !== -1){
        employees.splice(index , id)
        console.log("employees removed",employees)
    }else{
        console.log("empolyees not found")
    }
}
removeEmp(1)

//calculate total salary
function totalSalary(){
    const total=employees.reduce((sum,emp)=>sum+emp.salary,0);
    console.log("total salary is ",total);
}
totalSalary()
