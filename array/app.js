var mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
console.log(mois [2]); //récupère la valeur placé en index 2 soit mars
console.log(mois [5]); //récupère la valeur placé en index 5 soit juin
console.log(mois [10]); //récupère la valeur placé en index 10 soit novembre
console.log(mois [7] = "août"); // récupère la valeur placé en index 7 et modifie sa valeur
// console.log (mois.length); (compte le nombre de valeur dans le tableau)
for(var i= 0; i < mois.length; i++){console.log(mois[i])}; // liste toutes les valeurs d'un tableau
array.push ("courgette");// ajoute la valeur courgette au tableau array
console.log(array); //affiche dans la console le tableau array
array.push("citron") //ajout la valeur citron au tableau array
console.log(array); //affiche le tableau array dans la console

