let check = 0
function Goal(number, first_half, second_half) {
    this.number = number;
    this.first_half = first_half;
    this.second_half = second_half;
    this.times = []
    this.CreatTime = function (arr) {
        for (let index = 0; index < this.first_half; index++) {
            if (arr[index] < 45 + this.first_half) {
                continue;
            } else {
                check = 1
                console.log('No')
            }
        }
        if (check !== 1) {
            for (let index2 = this.first_half; index2 < arr.length; index2++) {
                if (arr[index2] <= 90 + this.second_half) {
                    continue;
                } else console.log('No')
            }
            console.log('yes')
        }
        return arr
    }
}
const tsubasa = new Goal(4, 2, 2)
tsubasa.times.push(tsubasa.CreatTime([4, 48, 45,80]))
// console.log(tsubasa)



// function Goal(number, first_half, second_half,arr){
//     for (let index = 0; index <= first_half; index++) {
//         if (arr[index] < 45 + first_half) {
//             continue;
//         } else {
//             check = 1
//             console.log('No')
//         }
//     }
//     if (check !== 1) {
//         for (let index2 = first_half; index2 < arr.length; index2++) {
//             if (arr[index2] <= 90 + second_half) {
//                 continue;
//             } else console.log('No')
//         }
//         console.log('yes')
//     }
// }
// console.log(Goal(4,2,2,[4, 45, 45,80]))