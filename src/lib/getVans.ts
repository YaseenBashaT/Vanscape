// Assuming you are inside getVans.ts

// Accessing the API URL from VITE_ environment variable
const API_URL = import.meta.env.VITE_API_URL;
export async function getVans() {
  try {
    const res = await fetch(`${API_URL}/van`);
    const data = await res.json();
    console.log('Fetched vans:', data); // Check the structure of the response
    return data.data || [];  // Return the array inside the 'data' field
  } catch (err) {
    console.error('Error fetching vans:', err);
    return [];
  }
}

