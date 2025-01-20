
// fetching

import fetch from 'node-fetch';
import { createClient } from '@sanity/client';



const sanityClient = createClient({
  projectId: '1ckd0rtb', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2025-01-19', // Use the latest date
  token: 'skpaLaQC9nMj1wBCJ7tH23Gn2hF37U22Dxf1I0qlnXIxHSGYsELXKRPR3fEUKaGx3uXEBBF0ciqw6nC9VBa9jCm60NkZVDH8kykrBc9pV55xZc9VXTggtyW7SElQipUX0kNL8UDV3ntefZ4vFvHZRtGyVCvgU1S0jyFpdaaTLSsKXarYSmnX', // Replace with your Sanity token
  useCdn: false,
});

const API_URL = 'https://next-ecommerce-template-4.vercel.app/api/product';

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function importData() {
  const products:any = await fetchData();

  for (const product of products) {
    try {
      await sanityClient.createOrReplace({
        _id: product.id,
        _type: 'product',
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      });
      console.log(`Successfully imported: ${product.name}`);
    } catch (error) {
      console.error(`Error importing product ${product.name}:`, error);
    }
  }
}

importData().catch((error) => console.error('Error during import:', error));
