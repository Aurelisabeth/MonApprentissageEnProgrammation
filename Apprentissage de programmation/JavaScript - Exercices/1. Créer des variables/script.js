/*1. Nom de variables.*/

/*Les noms de variables doivent être des mots simples et n'ont donc aucun espace.*/
let franceCapitale
/*_____________*/
/*Pour comprendre ce qu'il y a dans une variable, on choisit des noms descriptifs.*/
const TempsPluvieux
/*_____________*/

/*2. Valeur de variables.*/

/*Les noms de variables peuvent aussi contenir des nombres. L'ajout de nombres est utile avec plusieurs variables similaires.*/
const voiture1
/*_____________*/
/*Après avoir crée et nommé une variable, on peut le signe "=" pour stocker une valeur à l'intérieur.
Pour terminer la création d'une variable, on met un point-virgule ";" à la fin de la ligne.
Les valeurs stockés comme "Paris" sont des chaines de caractères. Les chaines de caractères sont des mots entre guillements.*/
const Ville = "Paris";
/*_____________*/
let nom = "Mario";
let emploi = "Plombier";
/*_____________*/
let entreprise = "Apple";
/*_____________*/
const ile = "Malte";
/*_____________*/
const appareil = "Ordinateur PC";
/*_____________*/

/*3. La différence entre let et Const.*/

/*"const" est la variable par défault dont la variable ne change change pas.*/
const norvegeCapitale = "Oslo";
/*_____________*/
/*Si on utilise "const" -> message d'erreur (TypeError: Assignment to constant variable.)
Donc on utilise "let"*/
let age = 90;
age = 91;
/*_____________*/
/*Pour éviter un message d'erreur avec "const" -> Mettre le nom en majuscule et le tirait du bas pour les espaces.*/
const ANNVERSAIRE = "25/02/1982";
/*_____________*/
const VITESSE_DE_LA_LUMIERE = "3x100 000 000 m/s"
/*_____________*/
const DEUXIEME_PRENOM = "Francesca";
/*_____________*/

/*4. La console.*/

/*L'ordre des instructions est importante puisque l'ordinateur les suit ligne par ligne.*/
const etape1 = "Collections de pantalons";
const etape2 ="?";
const etape3 = "Profit"
/*_____________*/
/*console.log() permet d'affiche les instructions données dans la parenthèse.*/
/*les instructions peuvent être une phrase entre les guillemets (strings).*/
console.log("Hello, World !")
/*_____________*/
console.log("3, 2, 1");
console.log("PARTEZ !");
/*_____________*/
/*Ou elles peuvent être le nom d'une variable.*/
const salutation = "Hello, World !";
console.log(salutation);
/*_____________*/
const nom = "Daniel";
console.log(nom);
