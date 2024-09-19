document.getElementById('cash-out-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('cash-out-money-from').value;
    const addPin = document.getElementById('cash-out-pin-from').value;
    if(addPin === '1234'){
        const balanceInput = document.getElementById('balance').innerText;
        const newMoney = parseFloat(addMoney);
        const newBalance = parseFloat(balanceInput);
        const totalBlance = newBalance - newMoney;
        document.getElementById('balance').innerText = totalBlance;
        document.getElementById('cash-out-money-from').value = '';
        document.getElementById('cash-out-pin-from').value = '';
    }else{
        alert('Wrong number and pin"')
    }
})