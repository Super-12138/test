let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
document.querySelector('h1').onclick = function() {
    alert('快来点我，嘿嘿');
}

let myimg = document.querySelector('img');
myimg.onclick = function() {
    let mySrc = myimg.getAttribute('src');
    if (mySrc === 'images/1.jpg') {
        myimg.setAttribute('src', 'images/2.jpg');
    } else {
        myimg.setAttribute('src', 'images/1.jpg');
    }
}

let myButton = document.querySelector('button');


function setUserName() {
    let myName = prompt('请输入你的名字：');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '你好' + myName + ',今天好吗 ';
    }
}
myButton.onclick = setUserName();