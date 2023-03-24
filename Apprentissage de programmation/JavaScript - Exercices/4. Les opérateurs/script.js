/*1. L'opérateur d'égalité : ===*/
/*Après avoir créer et stocker des valeurs, on va les comparer.
On va comparer les nombres comme pour vérifier si le mot de passe d'utilisateur correspond bien au mot de passe enregistré.*/
const saisiMDP = 5448;
const verificationMDF = 5440;
/*_____________*/
/*Pour comparer si deux nombres sont identiques, on utilise l'opérateur d'égalité, ===*/
5 === 5
/*_____________*/
/*Lorsqu'on compare les mêmes nombres avec l'opérateur d'égalité, le resultat est "true".*/
console.log(10 === 10);
/*_____________*/
/*Lorsqu'on compare deux nombres différents avec l'opérateur d'égalité, le resultat est "false".*/
console.log(9 === 10);

/*2. L'opérateur de négation : !==*/
/*Pour vérifier si un nombre n'est pas le même qu'un autre, on utilise l'opérateur d'inégalité : !==*/
console.log(1!==10);
/*_____________*/
/*Il est possible de stocker le résultat d'une comparaison avec l'opérateur d'inégalité dans une variable.*/
const résultat = 1 !== 2;
console.log(résultat);
/*_____________*/
/*Il est également possible de stocker les résultats de comparaisons d'égalité.*/
const résultat = 1 === 2;
console.log(résultat);
/*_____________*/
/*On peut comparer les valeurs avec les variables et les variables avec d'autres variables.*/
const un = 1;
const deux = 2;
console.log(un === deux);
console.log(un !== deux);
