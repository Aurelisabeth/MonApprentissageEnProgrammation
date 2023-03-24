/*1. Mettre à jour la variable "let".*/
let statutActuel = "Regarder Netflix";
statutActuel = "Se relaxer à la plage";
console.log(statutActuel);
/*_____________*/
statutActuel = "Lire";
console.log(statutActuel);
/*_____________*/
/*On peut aussi donner aux variables les valeurs d'autres variables en les plaçant l'une après l'autre.*/
let statutDefault = "Salut !";
let statutActuel = "Jouer au football";
statutActuel = "statutDefault";
console.log(statutActuel);
/*_____________*/
let statutActuel = "Jouer au football";
console.log(statutActuel);
statutActuel = "Sortir le chien";
console.log(statutActuel);
/*2. Les "expressions" avec des chaines de caractères (strings).*/
"Abonnés : " + "55";
/*_____________*/
 /*Le terme de l'addition de valeurs de chaines de caratères est une "expression" parce qu'elle crée une seule valeur de chaine.*/
console.log("Abonnés : " + "55");
/*_____________*/
const abonnés = "55";
"Abonnés :" + abonnés
/*_____________*/
const nombreAbonnés = "55";
console.log("Abonnés : " + nombreAbonnés);
/*_____________*/
const blog = "Publication : " + "13";
console.log(blog)
/*_____________*/
const température = "14";
console.log(température + " degrés");

/*3. Les nombres*/
/*Il y a d'autres types de valeurs : les nombres. Ils n'ont pas de guillements qui les entourent.*/
const nombreDeLikes = 5;
/*_____________*/
const nombreDeLikes = 5;
console.log(nombreDeLikes);
/*_____________*/
/*On utilise "+" pour additionner et "-" pour soustraire.*/
const nombreDeLikes = 5 + 1;
console.log(nombreDeLikes);
/*_____________*/
/*On utilise "*" pour multiplier et "/" pour diviser.*/
const pourcentage = 0.5 * 100;
console.log(pourcentage);
/*_____________*/
/*Lorsqu'on stocke des nombres dans des variables, on peut aussi utiliser des variables pour effectuer des calculs.*/
const nombreDeMarches = "70";
console.log("Tu es sur la ");
console.log(nombreDeMarches + 1);
console.log("ème marche");
/*_____________*/
/*Comme les expressions deviennent des valeurs, on peut stocker les résultats de calcul en variables.*/
const privé = 3;
const publique = 10;
const total = privé + publique;
console.log("Total de publications : " + total);
