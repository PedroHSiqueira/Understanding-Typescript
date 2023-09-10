// arrow functions

const add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(5, 5));

// shorter way // resumida
// com parametros default  caso eles não sejam passados na hora de chamar a função

const add2 = (n1: number = 0, n2: number = 0) => n1 + n2;

console.log(add2());

//Spread Operator ( ... ) // Espalha os elementos em um lugar da memória

const hobbies = ["Volley", "Videogame"];

const activeHobbies = ["Programming"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

//Reste Parameters // especificar o tipo do parametro, mas não se sabe quantos vão ser

const add3 = (...Numbers: number[]) => {
  return Numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add3(5, 10, 15, 20);
console.log(addNumbers);


//Destructurin Arrays

const [hobby1, hobby2, ...remaining] = hobbies

console.log(hobbies, hobby1, hobby2);

