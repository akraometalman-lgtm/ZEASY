function submitRequest(){

    let sourceOrg =
        document.querySelector("select").value;

    let newPurch =
        document.getElementById("newPurch").value.trim();

    // Clear previous messages
    document.getElementById("successBox").innerHTML = "";

    // Validation 1
    if(newPurch === ""){

        document.getElementById("successBox").style.display = "block";

        document.getElementById("successBox").innerHTML = `

        <div style="
            background:#ffd9d9;
            color:#a10000;
            padding:15px;
            border:1px solid #ff9999;
            border-radius:5px;
        ">

        ❌ Error : Please enter New Purchasing Organisation

        </div>

        `;

        return;
    }

    // Validation 2
    if(newPurch === sourceOrg){

        document.getElementById("successBox").style.display = "block";

        document.getElementById("successBox").innerHTML = `

        <div style="
            background:#ffd9d9;
            color:#a10000;
            padding:15px;
            border:1px solid #ff9999;
            border-radius:5px;
        ">

        ❌ Error : New Purchasing Organisation cannot be same as Source Purchasing Organisation

        </div>

        `;

        return;
    }

    // Validation 3
    if(newPurch.length !== 4){

        document.getElementById("successBox").style.display = "block";

        document.getElementById("successBox").innerHTML = `

        <div style="
            background:#ffd9d9;
            color:#a10000;
            padding:15px;
            border:1px solid #ff9999;
            border-radius:5px;
        ">

        ❌ Error : Purchasing Organisation must be 4 digits

        </div>

        `;

        return;
    }

    // Generate Request Number
    let req =
        "ZE" +
        Math.floor(
            100000 + Math.random() * 900000
        );

    document.getElementById("successBox").style.display = "block";

    document.getElementById("successBox").innerHTML = `

    <div style="
        background:#d4edda;
        color:#155724;
        padding:20px;
        border:1px solid #c3e6cb;
        border-radius:5px;
    ">

    ✓ Request Submitted Successfully

    <br><br>

    Request Number : <b>${req}</b>

    <br><br>

    Business Partner : 10002345

    <br><br>

    Source Purchasing Organisation : ${sourceOrg}

    <br><br>

    New Purchasing Organisation : ${newPurch}

    <br><br>

    Status : Pending Approval

    </div>

    `;

    document.getElementById("statusTable").innerHTML += `

    <tr>

        <td>${req}</td>

        <td>10002345</td>

        <td>Purchasing Organisation Extension</td>

        <td>Pending</td>

    </tr>

    `;

    document.getElementById("newPurch").value = "";

}
