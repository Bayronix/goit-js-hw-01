function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  function formatMessage(message, maxLength) {
    const truncatedMessage = message.slice(0, maxLength);
    return truncatedMessage;
  }
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
