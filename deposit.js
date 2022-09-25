document.getElementById('deposit-btn').addEventListener('click', function(){
  const depositField = document.getElementById('deposit-field');
  const depositFieldValueString = depositField.value;
  const newDepositAmount= parseFloat(depositFieldValueString);
  depositField.value= '';
  if(isNaN(newDepositAmount)){
    alert('please provide a valid number');
    return;
  }
  
  const depositBar =document.getElementById('desopit-amount');
  const depositBarValueString= depositBar.innerText;
  const depositBarAmount =parseFloat(depositBarValueString);
  const totalDeposit =depositBarAmount+ newDepositAmount;
  depositBar.innerText= totalDeposit;

  const totalBalance =document.getElementById('total-amount');
  const totalBalanceString= totalBalance.innerText;
  const totalBalanceAmount= parseFloat(totalBalanceString);
  const newDepositBalaceTotal= totalBalanceAmount+ newDepositAmount;
  totalBalance.innerText= newDepositBalaceTotal;

})