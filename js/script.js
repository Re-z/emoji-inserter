let insertAfterWords = 7;
let emojiArray = ['&#128512;', '&#x1F468;', '&#x1F3FB;', '&#x1F448;', '&#x1F448;', '&#x1F448;', '&#x1F448;',
'&#x1F448;', '&#x1F449;', '&#x1F449;', '&#x1F449;', '&#x261D;', '&#x261D;', '&#x261D;', '&#x261D;', '&#x1F446;',
'&#x1F446;', '&#x1F446;', '&#x1F91E;', '&#x1F91E;', '&#x1F91E;', '&#x1F91E;', '&#x1F590;', '&#x1F590;',
'&#x1F590;', '&#x270B;', '&#x270B', '&#x270B;', '&#x1F44C;', '&#x1F44C;', '&#x1F44C;', '&#x1F44D;', '&#x1F44D;',
'&#x270D;', '&#x1F3FB;', '&#x1F499;', '&#x1F49B;', '&#x1F49C;', '&#x1F5A4;', '&#x1F496;', '&#x1F4A3;',
'&#x1F451;', '&#x1F48E;', '&#x1F34B;', '&#x1F34E;', '&#x1F352;', '&#x1F30D;', '&#x1F30B;', '&#x2B50;',
'&#x1F31F;', '&#x1F525;', '&#x1F3C6;', '&#x1F3C5;', '&#x2660;', '&#x2665;', '&#x2666;', '&#x2663;', '&#x2660;',
'&#x2665;', '&#x2666;', '&#x2663;', '&#x2660;', '&#x2665;', '&#x2666;', '&#x2663;', '&#x2660;', '&#x2665;',
'&#x2666;', '&#x2663;', '&#x2660;', '&#x2665;', '&#x2666;', '&#x2663;', '&#x1F0CF;', '&#x1F0CF;', '&#x1F0CF;',
'&#x1F514;', '&#x1F4D8;', '&#x1F4B0;', '&#x1F4B0;', '&#x1F4B0;', '&#x1F4B6;', '&#x1F4B6;', '&#x1F4B5;',
'&#x1F4B5;', '&#x1F4B8;', '&#x1F4B3;', '&#x1F4B2;', '&#x1F4B2;', '&#x1F4B2;', '&#x1F51E;', '&#x27A1;',
'&#x2B06;', '&#x2934;', '&#x2705;', '&#x2705;', '&#x2705;', '&#x2705;', '&#x2705;', '&#x2705;', '&#x2714;',
'&#x2714;', '&#x2795;', '&#x2755;', '&#x2757;', '&#x23E9;', '&#x1F4AF;', '&#x1F193;', '&#x1F193;', '&#x1F193;',
'&#x1F537;', '&#x1F536;', '&#x1F53A;', '&#x1F534;', '&#x1F3B2;', '&#x1F3B2;', '&#x1F3B2;', '&#x1F3B2;',
'&#x1F3B0;', '&#x1F3B0;', '&#x1F3B0;', '&#x1F3B0;', '&#x1F3B0;', '&#x1F3B0;'];
// console.log(emojiArray)
trigger.addEventListener('click', () => {
let input = document.getElementById('input').value;

if(input) {
    let arr = input.split(' ');
    arr.forEach((el, index) => {
        if(index === 2 || index === insertAfterWords || index === insertAfterWords*2 || index === insertAfterWords*3 ||
        index === insertAfterWords*4 || index === insertAfterWords*5 || index === insertAfterWords*6 || index ===
        insertAfterWords*7 || index === insertAfterWords*8 || index === insertAfterWords*9) {
            let randomEmoji = emojiArray[Math.floor(Math.random()*emojiArray.length)]
            // console.log(randomEmoji);
            arr.splice(index, 0, randomEmoji);
        }
    });
    let output = arr.join(' ');
    // console.log(output);
    result.innerHTML = output;
    } else {
        alert('Поле ввода пустое!');
    }
    })

// resets input value
    function resetInputField() {
        reset.addEventListener('click', () => {
        input.value = '';
    })
}
resetInputField();
    