function concatStrings(arg1) {
    let result = "";
    let separator;
    let firstArgLen = arguments.length
    if (typeof arg1 === "string") {
        if (arguments.length>1 && typeof arguments[1] === "string" ){
            separator = arguments[1]
            result = arguments[0] + separator
        }else {
            result = arg1;
            firstArgLen = 1
        }
        return function by(arg2){
            if (typeof arg2 !== "string" && firstArgLen==1) {
                return result;
            }
            else if (typeof arg2 !== "string" && separator){
                let resultNoLastSep = result.slice(0,result.length - separator.length)
                return resultNoLastSep
            }
            else if(separator) {
                result += arg2 + separator;
                return by;
            }
            else {
                result += arg2;
                return by;
            }
        }
    } else {
        return result
    }
}

class Calculator{

    constructor(num1,num2) {
        if(typeof num1 !== "number" || typeof num2 !== "number" ||  !isFinite(num1) || !isFinite(num2)){
            throw new Error("Вы ввели не число")
        }
        this.num1 = num1;
        this.num2 = num2;

    }
    setX(num){
        if(typeof num !== "number" ||  !isFinite(num)){
            throw new Error("Вы ввели не число")
        }
        this.num1 =num
    }
    setY(num){
        if(typeof num !== "number" ||  !isFinite(num)){
            throw new Error("Вы ввели не число")
        }
        this.num2 =num
    }

    logSum = () => {
        console.log(this.num1+this.num2)
    }
    logMul = () =>{
        console.log(this.num1*this.num2)
    }
    logSub = () =>{
        console.log(this.num1-this.num2)
    }
    logDiv = () =>{
        if (this.num2 === 0){
            throw new Error("Деление на ноль невозможно")
        }
        console.log(this.num1/this.num2)
    }
}


