export function calculateWarehousePrice(length, width, monthlyRate = 5) {
  const area = length * width;
  const estimatedPrice = area * monthlyRate;

  return {
    area,
    estimatedPrice,
  };
}