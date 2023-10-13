

let btn = document.querySelector('#new-Quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')
let main = document.querySelector('.main-content')

const quotes = [{
    quote: `"The only place where success comes before work is in the dictionary."`,
    person: ` Vidal Sassoon`
   },{
    quote: `Opportunities are usually disguised as hard work, so most people don't recognize them." `,
    person: `Ann Landers`
   },{
    quote: `"Hard work without talent is a shame, but talent without hard work is a tragedy."`,
    person: `Robert Hall`
   },{
    quote: `"Satisfaction lies in the effort, not in the attainment. Full effort is full victory." `,
    person: `Mahatma Gandhi`
   },{
    quote: `"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will." `,
    person: `Vince Lombardi`
   },{
    quote: `"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence." `,
    person: `Colin Powell`
   },{
    quote: `"Hard work may not always result in success, but it will never result in regret." `,
    person: `Idel Dreimer`
   },{
    quote: `"I know you've heard it a thousand times before. But it's true - hard work pays off. If you want to be good, you have to practice, practice, practice."`,
    person: ` Ray Bradbury`
   },{
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts." `,
    person: `Winston S. Churchill`
   },{
    quote: `"Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work."`,
    person: `Stephen King`
   },{
    quote: `"There are no secrets to success. It is the result of preparation, hard work, and learning from failure." `,
    person: `Colin Powell`
   },{
    quote: `"The future belongs to those who believe in the beauty of their dreams." `,
    person: `Eleanor Roosevelt`
   },{
    quote: `"Be not afraid of going slowly; be afraid only of standing still." `,
    person: `Chinese Proverb`
   },{
    quote: `"The only thing that stands between you and your dream is the will to try and the belief that it is actually possible."`,
    person: ` Joel Brown`
   },{
    quote: `"I know you've heard it a thousand times before. But it's true - hard work pays off. If you want to be good, you have to practice, practice, practice." `,
    person: `Ray Bradbury`
   },{
    quote: `"The dictionary is the only place where success comes before work." `,
    person: `Mark Twain`
   },{
    quote: `"Effort only fully releases its reward after a person refuses to quit." `,
    person: `Napoleon Hill`
   },{
    quote: `"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence." `,
    person: `Colin Powell`
   },{
    quote: `"Success is the sum of small efforts, repeated day in and day out." `,
    person: `Robert Collier`
   },{
    quote: `"Satisfaction lies in the effort, not in the attainment. Full effort is full victory." `,
    person: `Mahatma Gandhi`
   },];

btn.addEventListener('click', () =>{
   let random = Math.floor(Math.random() * quotes.length);
   


   quote.innerText = quotes[random].quote;
   person.innerText = quotes[random].person;
})

main.addEventListener('mouseover', () =>{
   main.style.backgroundColor = 'red'

   if(main.style.backgroundColor = 'blue'){
     quote.style.color= 'white'
     btn.style.backgroundColor = 'black'

   }
}) 

