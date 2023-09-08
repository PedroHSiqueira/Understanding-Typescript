enum Role {ADM , READ_ONLY, AUTHOR}

const person: {
  name: string;
  age:number;
  hobbies: string[];
  role: Role
} = {
  name: "Pedro",
  age: 18,
  hobbies: ['Voleyball', 'Videogames'],
  role: Role.AUTHOR
}

let favoriteActivite: string[];
favoriteActivite = ['Voleyball']

if(person.role == Role.ADM){
  console.log(person)
}