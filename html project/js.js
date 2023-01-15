
function border(element)
{
    element.style.border ='3px solid blue'; 
}
function border2(element)
{
    element.style.border = "";
}
function regFulName (){
    var fullName=document.getElementById("fullName").value
    var regFulName= /^[a-z A-Z]{3,}\s[a-z A-Z]{3,}$/i
    var res=regFulName.test(fullName)
    if(res==false)
    {
        document.getElementById("msg").style.visibility="visible"
    }
    else{
        document.getElementById("msg").style.visibility="hidden"
    }
}
function password()
{
  if(document.getElementById("pasword").value==document.getElementById("repatedPasword").value)
    {
        document.getElementById("msg2").style.visibility="hidden"
    }
    else{
        document.getElementById("msg2").style.visibility="visible"
    }
}
function openPage(){
    win=open ("subscribe.html")
}
function thankYou(){
    win=open ("Thankyou.html")

}