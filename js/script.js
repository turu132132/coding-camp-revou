
welcomeSpeech();


function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName != '') {
        document.getElementById('user-greeting').textContent = userName;
    }
}

function validasi() {
    let name = document.getElementById('user-name').value;
    if (name == '') {
        alert("please write your name");

    } else {
        let email = document.getElementById('user-email').value;
        if (email == '') {
            alert("please write your email");
    } 
        else {
           let message = document.getElementById('user-message').value;
           if (message != '') {
                alert("your message :"+" "+ message +" "+"has been sent");
           }
           else {
            alert("please write your message");
           }
           }
              
        }
    } 
