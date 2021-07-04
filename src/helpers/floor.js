export function floorNumber(num){
    // console.log(num)
    return (Math.round(num * 100) / 100).toFixed(2);
}