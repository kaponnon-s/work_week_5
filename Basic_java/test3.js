array = [50,60,55,58,90,22,35,10,99,60,75,68];
function cal(array){
    sum = 0;
    for (index = 0; index < array.length; index++) {
    sum  = sum+array[index];
    }
    sum = sum/array.length;
    return sum;
}

console.log("ค่าเฉลี่ยเท่ากับ : "+cal(array))