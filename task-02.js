// ===========================================
// ____________HW-02___TASK-02______________

const calculateEngravingPrice = function (message, pricePerWord) {
  let word = message.split(" ");
  let wordQuantity = word.length;
  let totalPrice = pricePerWord * wordQuantity;
  return totalPrice;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
