/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.
Utilizzate liberamente il tipo di ciclo che preferite (for, for in o for of)

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
*/

/*
Dati:
Wayne Barnett   Founder & CEO         wayne-barnett-founder-ceo.jpg
Angela Caroll   Chief Editor          angela-caroll-chief-editor.jpg
Walter Gordon   Office Manager        walter-gordon-office-manager.jpg
Angela Lopez    Social Media Manager  angela-lopez-social-media-manager.jpg
Scott Estrada   Developer             scott-estrada-developer.jpg
Barbara Ramos   Graphic Designer      barbara-ramos-graphic-designer.jpg
*/

const ourTeam = [
  {
    name: 'Wayne Barnett',
    rule: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    rule: 'Chief Editor ang',
    photo: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    rule: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez' ,
    rule: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    rule: 'Developer',
    photo: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    rule: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
  }
]

//* ciclo for
// for (let i = 0; i < ourTeam.length; i++) {
//   const person = ourTeam[i];
//   // console.log(person);
//   // console.log(ourTeam);
//   for (let key in person) {
//     const property = person[key];
//     console.log(property);
    
//   }
//   console.log('-------------------------------------');
  
// }

//* ciclo for in
// for (let key in ourTeam) {
//   const person = ourTeam[key];
//   // console.log(person);
//   for (let key in person) {
//     const element = person[key];
//     console.log(element);
//   }
//   console.log('-------------------------------------');

// }

// const output = document.getElementById('output');
// //* ciclo for of
// for (let iterator of ourTeam) {
//   // const person = ourTeam[iterator];
//   // console.log(iterator);
//   for (let key in iterator) {
//     //*ottengo tutte le chiavi (key: valore)
//     // console.log(key);
//     //*ottengo tutti i valori (key: valore)
//     console.log(iterator[key]);
//     output.innerHTML += `${iterator[key]} <br>`
//   }
//   output.innerHTML += `------------------------------------- <br>`
//   console.log('-------------------------------------');

// }

//* BONUS ---------------------------------------------------------------------------------------------------------------

const row = document.querySelector('.row');
for (let iterator of ourTeam) {
  row.innerHTML += `
  <div class="output-card">
    <img src="img/${iterator.photo}">
    <h2 style="font-family:'Times New Roman', Times, serif;">${iterator.name}</h2> 
    <h4>${iterator.rule}</h4> 
  </div>
    `
}






















