export function toStandardCurrencyFormat(value){
  return `£${value.toFixed(2)}`
}

export default toStandardCurrencyFormat;
