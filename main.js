/* use this class to create new testimony objects */
class Testimony {
  constructor(name, job, testimony, selfie) {
    this.name = name;
    this.job = job;
    this.testimony = testimony;
    this.selfie = selfie;
  }
}
/* Master list, contains array of testimony objects */
let testimonyList = []

/* Target html elements and store as variable */
  /* html elements needed for their innerhtml */
let testimony = document.querySelector('.testimony-text');
let name = document.querySelector('.name');
let job = document.querySelector('.job');
let selfie = document.querySelector('.user .img-slider-container img');
  /* prev and next icon */
let prev = document.querySelector('.slider-prev');
let next = document.querySelector('.slider-next');

/* Keep track of index */
let indexOf = 0;



function createAndUpdateList(name, job, testimony, selfie) {
  let person= new Testimony(name, job, testimony, selfie);
  testimonyList.push(person);
  console.log(person);
  console.log(testimonyList);
}

function updateWebsite(i) {
  testimony.innerHTML = testimonyList[i].testimony;
  name.innerHTML = testimonyList[i].name;
  job.innerHTML = testimonyList[i].job;
  selfie.src = testimonyList[i].selfie;
}

function sliderEvent(num) {
  indexOf += num;
  if (indexOf >= testimonyList.length) {
    indexOf = 0;
  } else if (indexOf < 0) {
    indexOf = (testimonyList.length - 1);
  }
  
  updateWebsite(indexOf);
}

function main() {
  updateWebsite(indexOf)
  prev.addEventListener("click", () => sliderEvent(-1));
  next.addEventListener("click", () => sliderEvent(1));
}

createAndUpdateList("Tanya Sinclair", "UX Engineer", "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.", "/images/image-tanya.jpg")
createAndUpdateList("John Tarkpor", "Junior Front-end Developer", "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.", "/images/image-john.jpg")









/* psuedocode

2 events
-prev icon clicked
-next icon clicked

-Add new testimony

In both icon events, need to cycle through all value of that testimony object and update the innerhtml of each html elements respectively
Therefore create a function that does this,
WHILE function takes in a variable of a number, which indicates the index of testimonyList of array

THEN, for each event, if prev icon clicked, --variable, next icon clicked, 
++variable
IF variable = 0  when prev icon cliked, variable = testimonyList.length - 1
IF variable = testimonyList.length when next icon clicked, variable = 0



FOR ADDING NEW TESTIMONY EVENT,
initialize a new object with Testimony class,
update this new object into testimonyList
*/