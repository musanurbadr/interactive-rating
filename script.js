// Masaj icon 
let icon = document.querySelectorAll('#icon-star span');
// Btn transform
let btn = document.getElementById('onclick');
// Pointer 
let message = document.getElementById("selectedRating");

let baack = document.getElementById("back");

let front = document.getElementById("front");

let box = null;

icon.forEach((reting_icon)=>{
    reting_icon.addEventListener("click" , (e)=>{
        const active = document.querySelector('.checked');
        if(active){
            active.classList.remove("checked")
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;

    })
})
btn.addEventListener("click" , () => {
    if(rate){
        message.innerText = rate;
        front.classList.add("hidden");
        baack.classList.remove("hidden");
    }
});



// icon.forEach(element => {
//     element.addEventListener('click', () => {
//         showInput(element);

//     });

//     btn.addEventListener('click', function (){
        
//     })
// });
// function ewd (select){
//     select.classList.add('baack');
// }


// function showInput(element){
//     let value = parseInt(element.getAttribute('data-value'));
//     let orangeColor = getComputedStyle(document.body).getPropertyValue('--Orange');
//     element.style.backgroundColor = orangeColor;
//     element.style.color = "White";
//     message.innerText = value;
//     btn.click(
//     ); // Submit button'a otomatik tıklama yapar
// }








// btn.addEventListener('click' , sms);
// function sms (){
//     let A1 = document.getElementById("icon1").value;
//     if(){

//     }
// }