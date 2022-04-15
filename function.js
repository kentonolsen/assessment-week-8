// let testArr = [1, 2, 3, -2]
// let num = 0
// const testFunction = (arr) => {
//     while(num < arr.length){
//         let laer = arr[num]
//         for(i = 0; i < arr.length; i++){
//             let addedSum = laer + arr[i]
//             if(addedSum == 0){
//                return console.log('True')
//             }
//         } num++
//     }
// }
// testFunction(testArr)
//O(n^2)



let newWord = 'leter'

const wordFunction = (string) => {
    let newWord = string.split("")
    for(i = 0; i < newWord.length; i++){
        let num = newWord.length + 1
        if(newWord[i].includes(newWord)){
            
        }

    }
}

wordFunction(newWord)