function err()
{
    if(document.getElementById("fName").value=="")
    {
        document.getElementById("fNameErr").innerHTML="*required field";
    }
   if(document.getElementById("lName").value=="")
    {
        document.getElementById("lNameErr").innerHTML="*required field";
    }
    if(document.getElementById("eMail").value=="")
    {
        document.getElementById("eMailErr").innerHTML="*required field";
    }
    if(document.getElementById("mNumber").value=="")
    {
        document.getElementById("mNumberErr").innerHTML="*required field";
    }
    if(document.getElementById("pWord").value=="")
    {
        document.getElementById("pWordErr").innerHTML="*required field";
    }

}