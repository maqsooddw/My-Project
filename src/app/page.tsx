import Blog from "./components/Blog";
import DiscountItem from "./components/DiscountItem";
import Fifthblock from "./components/Fifthblock";
import Firstblock from "./components/Firstblock";
import Forthblock from "./components/Forthblock";
import Secondblock from "./components/Secondblock";
import Thirdblock from "./components/Thirdblock";
import Topcategories from "./components/Topcategories";
import Trandingproducts from "./components/Trandingproducts";
import {images, images2} from "./imgvar"
import fetch from 'node-fetch';
import { createClient } from '@sanity/client';

export default function Home() {

  // fetching  
  
  const sanityClient = createClient({
    projectId: '1ckd0rtb', // Replace with your Sanity project ID
    dataset: 'production', // Replace with your dataset name
    apiVersion: '2025-01-19', // Use the latest date
    token: process.env.SANITY_TOKEN, // Store your token securely in .env file
    useCdn: false,
  });

  const API_URL = 'https://next-ecommerce-template-4.vercel.app/api/product';

  // Category mapping for valid categories
  const categoryMapping:any = {
    chair: 'Chair',
    table: 'Table',
    sofa: 'Sofa',
    bed: 'Bed',
  };

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Debugging log
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  

  return (
<div>

<h3 className="text-3xl"> hello sanity </h3>

{/* <Firstblock/>
<Secondblock />
<Thirdblock images={images}/>
<Thirdblock images={images2}/>
<Forthblock />
<Fifthblock />
<Trandingproducts />

<DiscountItem /> 

<Topcategories />
<Blog /> */}


</div>
  
  );
}
