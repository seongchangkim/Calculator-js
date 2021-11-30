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
    const re = new RegExp("/+$|-$/");
    const regValue = cause.value.match(re);

    if(regValue === null){
        alert("연산자를 중복해서 사용할 수 없습니다.");
    }

    let resultValue = eval(cause.value);
    result.value = resultValue;
    temp = resultValue;

    cause.value = "";
};

function reset(){
    cause.value = "";
    result.value = "";
}

function reduce(){
    cause.value = temp;
    result.value = "";
    let oneReduceValue = cause.value.substring(0, cause.value.length-1);
    cause.value = oneReduceValue;
}
