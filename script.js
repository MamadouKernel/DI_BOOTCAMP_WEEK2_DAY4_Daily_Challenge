/**
 * Explication :
 * Après avoir transformé en tableau ma liste de mot:
 * 1 - je parcours ce tabelau afin d'avoir la longueur maximal que peut avoir un mot afin de pourvoir délimité les astérix
 * 2 - j'ajoute 4 sur la longueur maximal pour prendre en compte les espaces et les asterix qui entourent les mots
 * 3 - je fais une boucle qui va crée une chaine d'astérix ayant une longueur identique la longueur précédente
 * 4 - j'affiche cette chaine
 * 5 - je parcours mon tableau de mot et je vérifie si la longueur du mot est inférieur à la longueur maximal sans tenir compte des espaces et astérix autour
 * 6 - si c'est le cas, je rajoute de l'espace sur ma variable space afin de comblé les espaces manquant pour des mot petit
 * 7 - une fois que c'est fait, je fais un console.log de mot concaténé a ma varible space
 * 8 - sinon je fais un console.log du mot sans rajouté ma variable espace
 * 9 - pour fini, je console.log mes astérix de départ afin de fermer mon modèle
 * 10 - et tour est joué
 */
let wordSeparetedByComa = prompt("Saisissez des mots séparé par des virgule svp :");
let wordTab = wordSeparetedByComa.split(",");
let maxLenght = -1;
let asterix = '';
let space = ' ';
for(let i of wordTab) {
    if(i.length > maxLenght) {
        maxLenght = i.length;
    }
}

maxLenght+=4;

for(let i = 1; i <= maxLenght;i++) {
    asterix+='*';
}
console.log(asterix);
for(let i of wordTab) {
    if(i.length < (maxLenght -4)) {
        //space*=(maxLenght-4-Number(i.length));
        for(let j=0; j<(maxLenght-4-Number(i.length));j++) {
            space+=' ';
        }
        console.log(`* ${i}${space}*`);
        space = ' ';
    }else {
        console.log(`* ${i} *`);
    }

}
console.log(asterix);//hello,world,in,a,frame