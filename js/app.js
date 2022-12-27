// local reviews data

const reviews = [
    {
        id: 1,
        name: "Felipe Albernaz",
        job: "Dev Front-End",
        image: "images/person.jpeg",
        text: 
        "Site de qualidade e confiança com soluções incríveis, profissionais qualificados e eficiêntes. Sempre prontos e dispostos a ajudar!" 
    },
    {
        id: 2,
        name: "Anna johnson",
        job: "UX Designer",
        image: "images/person2.png",
        text: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, mi varius venenatis sollicitudin, quam quam auctor justo, vitae eleifend dui velit et massa." 
    },
    {
        id: 3,
        name: "Victor bron",
        job: "Developer Mobile",
        image: "images/person3.png",
        text: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, mi varius venenatis sollicitudin." 
    },
]

// select items
const img = document.getElementById('person-img');
const autor = document.getElementById('autor');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set starting item
let currentItem = 0;


// load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});

//show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.style.backgroundImage = 'url('+item.image+')';
    img.style.backgroundRepeat = 'no-repeat';
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
    autor.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
        showPerson();
    }
    showPerson();
    console.log(currentItem);
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson();
    console.log(currentItem);
})

// show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
    console.log(currentItem);
})

