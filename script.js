const dob = document.getElementById("dob");
const calculateButton = document.getElementById("clcbtn");
const displayAge  = document.getElementById("displayage");
const currentYear = (new Date()).getFullYear();

calculateButton.addEventListener('click', ()=>{
    if(dob.value ===""){
    alert("Enter Date of birth.")
    }
    else{
    const dobYear = (new Date(dob.value)).getFullYear();
    displayAge.innerHTML = `Your age is ${currentYear - dobYear} year old`;
    }
}, false);


