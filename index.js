console.log('hiii');

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
var sidem = document.getElementById('sidemenu');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

function openmenu(){
    sidem.style.right = "0";
}
function closemenu(){
    sidem.style.right = "-200px";
}

function fun1()

{   
    // console.log("kjbc");

    var more = document.getElementById("cal");
    var button = document.getElementById("btn1");
    
    if(more.style.display === "none")
    {
        more.style.display = "inline";
        button.innerHTML = "Show Less";
    }
    else{
        more.style.display = "none";
        button.innerHTML = "See More";
    }
    
}
