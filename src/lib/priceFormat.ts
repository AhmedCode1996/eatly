export const priceFormat = (price: number) => {
  let integerPart = Math.floor(price);

  //substring(1) is used to remove the leading 0
  let decimalPart = (price - integerPart).toFixed(2).substring(1);

  return {
    integerPart: integerPart,
    decimalPart: decimalPart,
  };
};
