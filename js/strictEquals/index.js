export const strictEquals = (valueA, valueB) => {
  const checkNumber = Object.is(valueA, valueB);

  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  }

  if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    return true;
  }

  if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    return true;
  }

  return checkNumber;
};
