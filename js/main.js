let cause = document.querySelector(".cause");
let result = document.querySelector(".result");
let temp = " ";

function add(str){
    if(result.value !== ""){
        result.value = "";
        cause.value = temp;
    }

    cause.value += str;
};

function calculate(){
    try{
        let resultValue = eval(cause.value);
        result.value = resultValue;
        temp = resultValue;
    }catch(e){
        alert("오류!")
    }finally{
        cause.value = "";
    }
};

function reset(){
    cause.value = "";
    result.value = "";
}

function reduce(){
    // cause.value = temp;
    // result.value = "";
    add("");
    let oneReduceValue = cause.value.substring(0, cause.value.length-1);
    cause.value = oneReduceValue;
}
