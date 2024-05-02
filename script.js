// Masaj icon 
let icon = document.querySelectorAll('#icon-star span');
// Btn transform
let btn = document.getElementById('onclick');
// Pointer 
let message = document.getElementById("selectedRating");

let baack = document.getElementById("back");

icon.forEach(element => {
    element.addEventListener('click', () => {
        showInput(element);

    });
    btn.addEventListener('click', function (){
        
    })
});
function showInput (select){
    select.classList.add('baack');
}






function showInput(element){
    let value = parseInt(element.getAttribute('data-value'));
    let orangeColor = getComputedStyle(document.body).getPropertyValue('--Orange');
    element.style.backgroundColor = orangeColor;
    element.style.color = "White";
    message.innerText = value;
    btn.click(
    ); // Submit button'a otomatik tıklama yapar
}










// btn.addEventListener('click' , sms);
// function sms (){
//     let A1 = document.getElementById("icon1").value;
//     if(){

//     }
// }