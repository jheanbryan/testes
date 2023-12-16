function checkWordInText(text, word) {
    if (text.includes(word)) {
        return `A palavra -${word}- está na frase.`;
    }
    return `A palavra -${word}- não está na frase.`;
}

console.log(checkWordInText('olá joão', 'olá'));
