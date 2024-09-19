document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('cash-out-btn-from').classList.remove('hidden');
    document.getElementById('add-money-btn-from').classList.add('hidden');
})
document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('cash-out-btn-from').classList.add('hidden');
    document.getElementById('add-money-btn-from').classList.remove('hidden');
    
})
