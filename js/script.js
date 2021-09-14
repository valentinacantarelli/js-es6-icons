// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];

const containerIcone=document.getElementById("icons");

const stampaCard=(array,container) =>{
    array.forEach(
        (element)=>{
            const{name,family,prefix} = element;
            container.innerHTML+=
            `<div class="card">
                <i class="${family} ${prefix}${name}" style="color:${colori}></i>
                <div class="icon-name">${name}</div>
            </div>`;
        }
    );
}


const colori={
    "food":"gold",
    "animals":"teal",
    "beverage":"purple"
}

const iconColorate = icons.map(
    (element)=>{
        return{
            ...element,
            color:colori[element.category]
        };
    }
);



const iconeCategorie=[];
icons.forEach(
    (element)=>{
        if(iconeCategorie.includes(element.category)==false){
            iconeCategorie.push(element.category);
        }
    }

);

const scegliCategoria=document.getElementById("categorie");

iconeCategorie.forEach(
    (element)=>{
        scegliCategoria.innerHTML+=`<option value="${element}">${element}</option>`
    }
    
);

scegliCategoria.addEventListener("change",
 function(){
     const filtroIcone=iconColorate.filter(
         (element)=>{
             if(element.category==scegliCategoria.value || scegliCategoria.value =="" ){
                 return true;
             }
             return false;
         }
     );
     stampaCard(iconColorate,containerIcone);
 }

);