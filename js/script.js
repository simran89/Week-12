
const $ =selector => document.querySelector(selector);

const processEntries =evt =>{
    const email1 = $("#emai1l").value;

    let isValid = true;
    if(email1==""){
        alert("Email 1 is required");
        isValid = false;
    }
    if(!isValid)
    {
        evt.preventDefaualt();
    }
    
}

document.addEventListener("DOMContentLoaded", ()=>{

    $("#joinList").addEventListener("click", processEntries);
});