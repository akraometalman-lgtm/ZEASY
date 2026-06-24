function login(){

document.getElementById("loginPage").style.display="none";

document.getElementById("easyAccess").style.display="block";

}

function openZeasy(){

if(document.getElementById("tcode").value.toUpperCase()=="ZEASY"){

document.getElementById("easyAccess").style.display="none";

document.getElementById("zeasyPage").style.display="block";

}

}

function showTab(tab){

document.querySelectorAll(".tab-content")

.forEach(x=>x.style.display="none");

document.getElementById(tab).style.display="block";

}

function searchBP(){

document.getElementById("bpArea")

.style.display="block";

}

function showPurchasing(){

document.getElementById("purchaseBox")

.style.display="block";

}

function submitRequest(){

let req="ZE"+Math.floor(

100000+Math.random()*900000

);

document.getElementById("successBox")

.style.display="block";

document.getElementById("successBox")

.innerHTML=`

<div class='success'>

✓ Request Submitted Successfully

<br><br>

Request Number : ${req}

<br><br>

Status : Pending

</div>

`;

document.getElementById("statusTable")

.innerHTML+=`

<tr>

<td>${req}</td>

<td>10002345</td>

<td>Purchasing Org</td>

<td>Pending</td>

</tr>

`;

}
