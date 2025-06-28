// Accessing the API URL from VITE_ environment variable
const API_URL = import.meta.env.VITE_API_URL;

export async function getVans() {
  try {
    console.log('Fetching vans from:', `${API_URL}/van`);
    
    const res = await fetch(`${API_URL}/van`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add mode to handle CORS properly
      mode: 'cors',
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Fetched vans response:', data);
    
    // Return the array inside the 'data' field, or the data itself if it's already an array
    return Array.isArray(data) ? data : (data.data || []);
  } catch (err) {
    console.error('Error fetching vans:', err);
    throw err; // Re-throw to let the calling component handle it
  }
}