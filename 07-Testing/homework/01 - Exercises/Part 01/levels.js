const levelOne = (a, b) => a + b;

const levelTwo = (letras) => {
    if(letras.length < 2) return letras;
    if(letras.length === 2) return letras[0];
    if(letras.length > 2) {
        const letra = [];
        for (let i = 0; i < letras.length; i++) {
            if(i % 2 === 0) letra.push(letras[i])
        }
        return letra.join('');
    }
};

const levelThree = (a, b) => [...a, ...b].sort();
//! Guarda copia de a y copia de b .sort ordena lo que le pase en el array, sin condicion ordena de menor a mayor.

const levelFour = (num) => {
    let str = num.toString().split('');
    let numbers = str.map(string => Number(string));
    let result = numbers.reduce((acc, num) => acc + num);
    let resultReverse = result.toString().split('').reverse().join('');

    return result * Number(resultReverse) === num;
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
