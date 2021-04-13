function setWerr() {
    if (document.getElementById("fName").value == "") {
        document.getElementById("fNameErr").innerHTML = "*required field";
    }else{
    var fNameCoki=document.wCookies.fName.value + "; max-age="+60*60*24*10;
    console.log(fNameCoki);
    document.cookie="Firstname="+fNameCoki;
    }

    if (document.getElementById("lName").value == "") {
        document.getElementById("lNameErr").innerHTML = "*required field";
    }else{
        var lNameCoki=document.wCookies.lName.value + "; max-age="+60*60*24*10;
        console.log(lNameCoki);
        document.cookie="lastname="+lNameCoki;
    }

    if (document.getElementById("eMail").value == "") {
        document.getElementById("eMailErr").innerHTML = "*required field";
    }else{
        var eMailCoki=document.wCookies.eMail.value + "; max-age="+60*60*24*10;
        console.log(eMailCoki);
        document.cookie="eMail="+eMailCoki;
    }

    if (document.getElementById("mNumber").value == "") {
        document.getElementById("mNumberErr").innerHTML = "*required field";
    }else{
        var mNumberCoki=document.wCookies.mNumber.value + "; max-age="+60*60*24*10;
        console.log(mNumberCoki);
        document.cookie="MobileNumber="+mNumberCoki;
    }

    if (document.getElementById("pWord").value == "") {
        document.getElementById("pWordErr").innerHTML = "*required field";
    }else{
        var pWordCoki=document.wCookies.pWord.value + "; max-age="+60*60*24*10;
        console.log(pWordCoki);
        document.cookie="Password="+pWordCoki;
    }
}

function getCoki(){
    var cokiRaw=document.cookie.split(";");
    console.log(cokiRaw);
    for(let i=0;i<cokiRaw.length;i++){
        var cokiSort=cokiRaw[i].split("=");
        console.log(cokiSort);
        if (cokiSort[0].trim()=="Firstname"){
            document.wCookies.fName.value=cokiSort[1];
        }
        if (cokiSort[0].trim()=="lastname"){
            document.wCookies.lName.value=cokiSort[1];
        }
        if (cokiSort[0].trim()=="eMail"){
            document.wCookies.eMail.value=cokiSort[1];
        }
        if (cokiSort[0].trim()=="MobileNumber"){
            document.wCookies.mNumber.value=cokiSort[1];
        }
    }
}