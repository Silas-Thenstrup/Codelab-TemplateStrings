/* Opgave 1*/


// din kode her
        const navn = "Keld";
        const aarIvirksomhed = 3;
        const besked = `<h2>Hej ${navn}</h2>du har arbejdet i vores virksomhed i ${aarIvirksomhed} år.`;
        console.log(besked);

        let message = document.getElementById("message");
        message.innerHTML = besked;

/* Opgave 2*/


// din kode her
    const myData = [
      { 
        "navn": "T-shirt", 
        "beskrivelse": "En t-shirt lavet af bomuld", 
        "pris": 99 
      },
      { 
        "navn": "Jeans", 
        "beskrivelse": "Blå denim jeans med straight fit", 
        "pris": 299 
      },
      { 
        "navn": "Hættetrøje", 
        "beskrivelse": "En grå hættetrøje med lynlås", 
        "pris": 199 
      }
    ];

    const produktListe = document.getElementById("produktListe");

    myData.forEach(produkt => {
      const template = `
        <article class="produkt">
          <h2>${produkt.navn}</h2>
          <p>${produkt.beskrivelse}</p>
          <p>Pris: ${produkt.pris} kr.</p>
        </article>
      `;
      produktListe.innerHTML += template;
    });


/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');


