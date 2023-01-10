const inputWeight = document.getElementById('weight');
const inputRangeWeight = document.getElementById('range_weight');
const inputHeight = document.getElementById('height');
const inputRangeHeight = document.getElementById('range_height');
const btn = document.getElementById('result');
const result = document.getElementById('info');

let weight = 0;
let height = 0;
let rangeWeight;
let rangeHeight;
let bmi = '';

inputWeight.addEventListener('input',(e) => {
    weight = e.target.value;  
    inputRangeWeight.value = weight; 
    result.textContent = '...';

    if(e>300){
        inputWeight.textContent = '300';
    }
})
 
inputHeight.addEventListener('input',(e) => {
    height = e.target.value;  
    inputRangeHeight.value = height; 
    result.textContent = '...';
})

inputRangeWeight.addEventListener('input',(e) => {
    rangeWeight = e.target.value;  
    inputWeight.value = rangeWeight; 
    weight = rangeWeight;
    result.textContent = '...';
})
 
inputRangeHeight.addEventListener('input',(e) => {
    rangeHeight = e.target.value;  
    inputHeight.value = rangeHeight; 
    height = rangeHeight;
    result.textContent = '...';
})

showResult = ()=>{
    if((weight != '') && (height != '')){
        bmi = (weight/ ( Math.pow(height/100,2) )). toFixed(2);
        if(bmi<16){
            result.textContent = bmi + ' - wygłodzenie';
        } else if((bmi>=16) && (bmi<17)){
            result.textContent = bmi + ' - wychudzenie';
        } else if((bmi>=17) && (bmi<18.5)){
            result.textContent = bmi + ' - niedowaga';
        } else if((bmi>=18.5) && (bmi<25)){
            result.textContent = bmi + ' - waga prawidłowa';
        } else if((bmi>=25) && (bmi<30)){
            result.textContent = bmi + ' - nadwaga';
        } else if((bmi>=30) && (bmi<35)){
            result.textContent = bmi + ' - otyłość I stopnia';
        } else if((bmi>=35) && (bmi<40)){
            result.textContent = bmi + ' - otyłość II stopnia';
        } else{
            result.textContent = bmi + ' - otyłość III stopnia';
        }
    } else {
        result.textContent = '...';
    }
}

btn.addEventListener('click', showResult)