const sentence = "Good days give happiness, bad days give experience, worst days give lessons, and the best days give memories."

function exaggerate(sentence) {
    const dict = {
        "Good": "Great",
        "bad": "terrible",
        "like": "love",
        "dislike": "hate"
    }

    let sentenceArr = sentence.split(" ")

    const exaggeratedArr = sentenceArr.map((word) => {
        return dict.hasOwnProperty(word) ? dict[word] : word
    })
    
    console.log(exaggeratedArr.join(" "))
}

exaggerate(sentence)