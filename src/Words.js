// for every word we have 6 attemps so we will create a boardDefault values ..
import WordBank from '../src/wordle-bank.txt'
export const boardDefault=[
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
];

 export const generateWordSet= async () => {
    let wordSet;
    await fetch(WordBank)
    .then((response)=>response.text())
    .then((result)=>{
       let wordArr=result.split("\n")
       wordArr = wordArr.map((item)=>item.slice(0,5))
       wordSet=wordArr
     });
    return { wordSet }
}
