let names = ["venkatesh", "aditya", "rakesh", "manjunath", "Ramu"];
let salaries = [30000, 80000, 25000, 600000, 70600];
function addUser(){
    if(names.length>0){
    let d1=document.createElement("td");
    d1.innerHTML=names[0];
    let d2=document.createElement("td");
    d2.innerHTML=salaries[0];
    names.shift();
    salaries.shift();
    let d3=document.createElement("tr");
   d3.classList.add("row");
    d3.appendChild(d1);
    d3.appendChild(d2);
    document.getElementById("table_body").append(d3);
    }
    else{
        alert("No more users to add");
    }
    
}
function doubleSal(){
    let rows=document.getElementsByClassName("row");
    for(let i=0;i<rows.length;i++){
        let sal=parseInt(rows[i].children[1].innerHTML);
        rows[i].children[1].innerHTML=sal*2;
    }
} 
function filterSal(){
    let rows=document.getElementsByClassName("row");
    for(let i=0;i<rows.length;i++){
        let sal=parseInt(rows[i].children[1].innerHTML);
        if(sal<50000){
            rows[i].style.display="none";
        }
    }

}
function sortSal(){
    let rows = document.getElementsByClassName("row");
    let arr = [];
    for (let i = 0; i < rows.length; i++) {
        arr.push({
            name: rows[i].children[0].innerHTML,
            salary: parseInt(rows[i].children[1].innerHTML)
        });
    }
    arr.sort(function(a, b) {
        return a.salary - b.salary;
    });
    for (let i = 0; i < rows.length; i++) {
        rows[i].children[0].innerHTML = arr[i].name;
        rows[i].children[1].innerHTML = arr[i].salary;
    }

}