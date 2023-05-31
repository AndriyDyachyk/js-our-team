console.log('principi.js loaded');

let teamArray = [
    { 
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'   
    },
    { 
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'   
    },
    { 
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'   
    },
    { 
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'   
    },
    { 
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'   
    },
    { 
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'   
    }
]

// stampa in console delle properties di ogni membro del team
const cards_container = document.getElementById('card_container')
for(let i=0; i<teamArray.length; i++){
    let membro = teamArray[i]
    //compresa stilizzazione
    let card = `<div class="card border-0 " style="width: 18rem;">
                    <img src="${'./img/'}${membro.image}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h3 class="card-title">${membro.name}</h3>
                        <p class="card-text">${membro.role}</p>
                    </div>
                </div>`

    //aggiunta delle card nel dom
    cards_container.innerHTML += card
}