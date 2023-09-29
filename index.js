const personImg = document.getElementById('person-picture');
const personName = document.getElementById('person-name');
const personStatus = document.getElementById('person-status');
const personDescription = document.getElementById('person-description');
const pervBtn = document.getElementById('pervious-btn');
const nextBtn = document.getElementById('next-btn');
const randomBtn = document.getElementById('random-btn');

const personObjConstructor = function(id,image,name,status,description){
    this.id = id;
    this.image = image;
    this.name = name;
    this.status = status;
    this.description = description;
}

const person1 = new personObjConstructor(1,'./img/person1.jpg','Peter Jones','Intern','Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.');
const person2 = new personObjConstructor(2,'./img/person2.jpg','Bill Anderson','The boss','Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.');
const person3 = new personObjConstructor(3,'./img/person3.jpg','Susan Smith','Web Developer','I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry');
const person4 = new personObjConstructor(4,'./img/person4.jpg','Anna Johnson','Web Designer','Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.');

const personObjArr = [person1,person2,person3,person4];

const btnArr = [nextBtn,pervBtn,randomBtn];

btnArr.forEach((btn) => {
    let index = 0;
    btn.addEventListener('click',function(){
        const btnId = this.id;
        if(btnId === 'pervious-btn'){
            index--;
            if(index < 0){
                index = personObjArr.length - 1;
            }
        } else if(btnId === 'next-btn'){
            index++;
            if(index === personObjArr.length){
                index = 0;
            }
        } else{
            index = Math.floor(Math.random() * personObjArr.length);
        }
        personImg.src = personObjArr[index].image;
        personName.textContent = personObjArr[index].name;
        personStatus.textContent = personObjArr[index].status;
        personDescription.textContent = personObjArr[index].description;
    });
});