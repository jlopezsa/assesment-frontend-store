const API_URL = 'https://fakestoreapi.com';

// eslint-disable-next-line import/prefer-default-export
export async function getAllProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    const products = await response.json();
    return products;
  } catch (error) {
    return null;
  }
}
