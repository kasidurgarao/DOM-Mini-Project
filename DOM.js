const prev = document.querySelector('.prev-button');
const next = document.querySelector('.nxt-button');
const changeData = document.querySelector('#data h2');
const progressBar = document.querySelector('.prograssbar');

let counter = 1; 
const steps = document.querySelectorAll('.prograssbar .prograss-step'); 
const totalSteps = steps.length+1; 

let info = ['Add contact details for further communications.','Add shipping address for successful delivery.',
    'Complete payment to complete the order.','Ready to get delivered!','Order delivered successfully!'
]

function updateFunc(count) {
    // console.log(count);
    const getCircle = document.querySelector(`#jump${count}`);
    const getinfo = document.querySelector('#data h2')
    prev.disabled = count < 1;
    next.disabled = count >= totalSteps;
    // console.log(getinfo)

    if (getCircle) {
        getCircle.style.backgroundColor = 'blue'; 
        getCircle.style.color='white';

    }
    const gettik = document.querySelector(`#jump${count-1}`);
    gettik.innerHTML='&#10003';
    gettik.style.Color='white';
    gettik.style.backgroundColor="green";
    getinfo.innerHTML=info[count-1];

    if(count>=2 && count<=4){
    let changecolor = document.querySelector(`.hr${count-1} hr`);
    changecolor.style.backgroundColor="green";
    }
    if(count === totalSteps){
        next.innerHTML='Finish';
    }
    // getinfo.style
}
function updateFunc1(count) {
    console.log(count);
    const currentCircle = document.querySelector(`#jump${count}`);
    const previousCircle = document.querySelector(`#jump${count + 1}`);
    prev.disabled = count <= 1;
    next.disabled = count >= totalSteps;

    if (previousCircle) {
        previousCircle.style.backgroundColor = 'rgb(139, 138, 160)';
        previousCircle.style.color='black';
        previousCircle.innerHTML = `${count + 1}`; 
    }

    if (currentCircle) {
        currentCircle.style.backgroundColor = 'blue';
       
        currentCircle.innerHTML=`${count}`
    } else {
        console.log(`Element with ID jump${count} not found`);
    }

    // Update the information text
    const getinfo = document.querySelector('#data h2');
    getinfo.innerHTML = info[count - 1];

    if(count >1){
    let horline = document.querySelector(`.hr${count-1} hr`);
    horline.style.backgroundColor='black'; 
    }       
}


next.addEventListener('click', () => {
    if (counter < totalSteps) {
        counter++;
        if(counter==1){
            counter++
        }
        console.log(counter);
        updateFunc(counter);
    }
});

prev.addEventListener('click', () => {
    
    if (counter > 1) {
        counter--;
        console.log(counter);
        updateFunc1(counter);
        
        
       
    }
});