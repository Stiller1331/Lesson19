let old = prompt ('How old are you', 0);
let answer;
if(old <= 17){
   confirm( "Do you study at school?");
} else if (old > 17 && old < 25){
    confirm ("Do you study at university?");
} else if (old >= 25 && old < 60){
    confirm ("Do you have a job?");
} else {
    alert ("What are you doing?");
}



let display = prompt('Display:' )
switch(display){
    case 'block':
        alert (`display:${display}`);
        break;
    case 'flex':
        alert(`display:${display}`);
        break;
    case 'grid':
        alert(`display:${display}`);
        break;
    case 'inline':
        alert(`display:${display}` );
        break;
    case 'none':
        alert(`display:${display}`);
        break;
    default:
        alert('Set \'display: inline-block;');
 }
let number = Number(prompt('Please enter the number',0));
while (isNaN(number)){
   number = prompt ('Your number is incorect, please enter corect number',0);
}
{
    alert(`${number} by 12 equals ${number * 12}`);
 }
for(let i = 1; i <= 25; ++i){
console.log(`${i*2}`);
}

