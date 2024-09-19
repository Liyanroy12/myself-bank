document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('add-money-from').value;
    const addPin = document.getElementById('add-pin-from').value;
    if(addPin === '1234'){
        const balanceInput = document.getElementById('balance').innerText;
        const newMoney = parseFloat(addMoney);
        const newBalance = parseFloat(balanceInput);
        const totalBlance = newBalance + newMoney;
        document.getElementById('balance').innerText = totalBlance;
        document.getElementById('add-money-from').value = '';
        document.getElementById('add-pin-from').value = '';
    }else{
        alert('Wrong number and pin"')
    }
})