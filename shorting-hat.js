const shortingHat = (str) => {
    const memberMixed = str.split(" ");
    let memberArray = []
    memberMixed.forEach((element, index) => {
        if(index%2===0) {
            memberArray.push(element)
        }
    });
    let random = Math.floor(Math.random() * (memberArray.length));
    return memberArray[random];
}
let str = "5010_Adarsh Pathak Dilsher Balouch Rustem Kanafin Shaaibu Suleiman Vivek Kumar";


const str2 ="5010_Adarsh Pathak Divine Asiriuwa Innocent Ndahimana Shaaibu Suleiman"

console.log(shortingHat(str2))