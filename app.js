let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function mover(pronoun,adj,noun){
let rand=[];

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
console.log(mover(pronoun, adj, noun));