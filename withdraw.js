function getInputElementValue(elementId) {
  const inputField = document.getElementById(elementId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
};

function getInnerTextValue(elementId) {
  const elementTag = document.getElementById(elementId);
  const previousValueString = elementTag.innerText;
  const previousValueAmount = parseFloat(previousValueString);
  return previousValueAmount;
};

function setElemetValue(elementId, newValue) {
  const targetElement = document.getElementById(elementId);
  targetElement.innerText = newValue;
};

document.getElementById('withdraw-btn').addEventListener('click', function () {
  const newWithdrawAmount = getInputElementValue('withdraw-input-field');
  const previousWithdrawTotal = getInnerTextValue('withdraw-total');
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setElemetValue('withdraw-total', newWithdrawTotal);

  const previousTotalBalance = getInnerTextValue('total-amount');
  const newTotalBalance = previousTotalBalance - newWithdrawAmount;
  setElemetValue('total-amount', newTotalBalance);

})