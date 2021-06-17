// ---------------------VARABLES-----------------
const hello = 'Hello !';
let orane = 'Orane';
console.log(hello + ' ' + orane);

// -------------------FONCTION-------------------
function addition(numberA, numberB) {
    return numberA + numberB;
}
console.log(addition(4,6));

// ----------------------CONDITION---------------
let age = 45;
if(age<18) {
    console.log('Je suis mineur');
} else if (age < 65) {
    console.log('Je suis adulte');
} else {
    console.log('Je suis senior');
}

// ---------------------DO WHILE-----------------
let n = 1;
do {
    console.log("J'incremente la variable n : " + n);
    n++;
} while (n<=3)

// ----------------------TABLEAU-----------------
const villes = ['Lyon', 'Paris', 'Sainte Olive'];
console.log(villes[2]);
villes.forEach((ville, index) => {
    console.log('ville ' + (index+1) + ' : ' + ville);
});

// ---------------------------OBJET--------------
const personnes = [
    {
        nom: 'Orane Monteil',
        age : 28
    },
    {
        nom: 'Sam Hamadi',
        age : 45,
        profession : 'Entrepreneur',
        uneFonctionAuPif : (number) => {
            console.log('3 x ' + number + ' = ' + (3*number));
        }
    }
];
personnes.forEach(personne => {
    console.log(personne);
    console.log(personne.nom);
        console.log(personne.age);
    if (personne.profession) {
        console.log(personne.profession);
    }
    if (personne.uneFonctionAuPif) {
        personne.uneFonctionAuPif(9);
    }
});

// ----------------------OPERATEURS----------------
if (true == 1) {
    console.log('A');
}
if (true === 1) {
    console.log('B');
}