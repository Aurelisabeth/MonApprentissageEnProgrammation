/*1. Les booléens.*/

/*"true" est idéal pour vérifier, par exemple, si un interrupteur est activé ou si une fonction est activé.*/
console.log("Autoriser la mise à jour");
console.log(true);
/*_____________*/
/*On peut stocker "true" dans une variable, par exemple une chaine de caratère ou un nombre.*/
const correcte = "true";
console.log(correcte);
/*_____________*/
/*"false" est également une valeur spécifique et l'inverse de "true". On peut l'utiliser comme "true".*/
console.log("Batterie chargée");
const statut = false;
console.log(statut);

/*_____________*/

/*2. Les valeurs négatives.*/

/*Le "!" est l'opérateur de négation. Il transforme les valeurs en leur contraire.
Le signe "!" devant "true" donne le résultat "false"
-> si quelque chose n'est pas vrai, il doit être faux.*/
console.log(!true);
/* -> false*/
console.log(!false);
/* -> true*/
/*_____________*/
const leMatin = true;
console.log(!leMatin);
/*_____________*/
/*Il est également possible d'enregistrer une négation complète en une autre variable.*/
const leMatin = true;
const leSoir = !leMatin;
console.log(leSoir);
