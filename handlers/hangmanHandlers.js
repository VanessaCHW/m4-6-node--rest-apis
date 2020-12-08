const { words } = require('../data/words');

// write your handlers here...
const getWordByID = (req,res)=>{

    let wordObject = words.filter((word)=> word.id == req.params.id);

    res.status(200).json({
        data: wordObject[0]
    });
};

const getRandomWord = (req,res)=>{

    let randomIndex = Math.round(Math.random()*words.length);
    let info = {
        id: words[randomIndex].id, 
        letterCount: words[randomIndex].letterCount
    };

    res.status(200).json({
        status:200,
        data: info
    });
};

const guessLetter = (req,res)=>{

    let wordData = words.filter((word)=>word.id == req.params.id);
    if(wordData.length ==0){
        res.status(400).json({
            status:400,
            message: "Invalid ID"
        });
    }

    let guesses = Array(parseInt(wordData[0].letterCount)).fill(false);

    let chosenWord = wordData[0].word.split("");
    chosenWord.forEach((letter,index)=>{
        if(letter==req.params.letter){
            guesses[index]=true;
        }
    });

    res.status(200).json({
        status:200,
        data: guesses
    });
};


module.exports = {getWordByID, getRandomWord, guessLetter};