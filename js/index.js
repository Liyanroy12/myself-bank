document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const loginInput = document.getElementById('login-input').value;
    const loginPin = document.getElementById('login-pin').value;
    if(loginInput === '2233' && loginPin === '1234'){
        window.location.href='./home.html';
        document.getElementById('login-input').value = '';
        document.getElementById('login-pin').value = '';
    }else{
        alert("Wrong number and pin")
    }
})