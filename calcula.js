let screen = document.getElementById('screen');

function btnClick(value){
    screen.value += value;
}

function clearscreen(){
    screen.value="";
}
function LastClear(){
    screen.value = screen.value.slice(0,-1);
}
function findresult(){
    try{
    var result =eval(screen.value)
    screen.value=result;
}
catch{
    screen.value='Error!';
}
}


