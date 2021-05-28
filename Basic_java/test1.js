x = 360;
y = 82;
function check(x,y){
    sum = 0;
    while(true){
        if(x >= y){
            if(x%y == 0){
                sum = y;
                break;
            }else{
                x = x%y;
            }
        }else{
            if(y%x == 0){
                sum = x;
                break;
            }else{
                y = y%x;
            }
        }
    }
    return sum;
}
console.log("หรม. = "+check(x,y))
