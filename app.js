let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function mover(pronoun,adj,noun){
let rand=[];
/*let numRand = a[Math.floor(Math.random() * a.length)];
let numRand1 = b[Math.floor(Math.random() * b.length)];
let numRand2 = c[Math.floor(Math.random() * c.length)];
let resultado=(numRand +numRand1 +numRand2+".com");*/

for(let i=0; i < pronoun.length;i++){
  for(let x =0; x < adj.length; x++){
    for( let j =0; j < noun.length; j++){
      let resultado = (pronoun[i] + adj[x] + noun[j]+".com");
      rand.push(resultado);
    }
  }
}

return rand;

}
let rand= mover(pronoun, adj, noun)
console.log(mover(pronoun, adj, noun));