import {
  getProducts,
  getDiscountPrice,
  getProductCartQuantity,
  getSortedProducts
} from './product';

describe('product helpers', () => {
  const mockProducts = [
    { id: 1, category: ['electronics'], price: 100, new: true, saleCount: 10, discount: 10 },
    { id: 2, category: ['clothing'], price: 50, new: false, saleCount: 20, discount: 0 },
    { id: 3, category: ['electronics'], price: 200, new: true, saleCount: 5, discount: 15 }
  ];

  test('getProducts filters by category', () => {
    const result = getProducts(mockProducts, 'electronics', null, null);
    expect(result.length).toBe(2);
  });

  test('getProducts filters new products', () => {
    const result = getProducts(mockProducts, null, 'new', null);
    expect(result.length).toBe(2);
  });

  test('getDiscountPrice calculates correctly', () => {
    expect(getDiscountPrice(100, 10)).toBe(90);
    expect(getDiscountPrice(100, 0)).toBe(null);
  });

  test('getProductCartQuantity returns 0 for empty cart', () => {
    const result = getProductCartQuantity([], mockProducts[0], null, null);
    expect(result).toBe(0);
  });

  test('getSortedProducts sorts by price', () => {
    const result = getSortedProducts(mockProducts, 'filterSort', 'priceLowToHigh');
    expect(result[0].price).toBe(50);
    expect(result[2].price).toBe(200);
  });
});
