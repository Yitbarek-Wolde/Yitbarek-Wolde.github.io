
let arryOfnums = [10,23,4,5,89]

function even(arryOfnums){
    let arr = []
    for(i=0; i< arryOfnums.length; i++){
        if(arryOfnums[i] % 2 == 0)
            arr.push(arryOfnums[i])    
    }
    return arr
}

function paleindrom(words){
    let newWords = ""
    for(i=words.length - 1; i >= 0; i--)
        newWords += words[i]
   if(words == newWords)
        return true
    else
        return false
}

console.log(paleindrom("level"))

console.log(even(arryOfnums))

let obj = {a:1, b:"apple"}

function objectloop(ob){
    for(let key in ob){
        if(ob[key] === "apple")
           return console.log("The key is", key)
            
    }
    return console.log("Not found.")
}

objectloop(obj)
