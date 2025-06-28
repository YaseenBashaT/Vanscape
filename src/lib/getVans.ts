// Updated getVans function with better error handling and logging
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function getVans() {
  try {
    console.log('Fetching vans from:', `${API_URL}/api/van`);
    
    const res = await fetch(`${API_URL}/api/van`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Response status:', res.status);
    console.log('Response ok:', res.ok);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Raw API response:', data);
    
    // Handle different response structures
    if (data && Array.isArray(data.data)) {
      console.log('Returning data.data:', data.data);
      return data.data;
    } else if (Array.isArray(data)) {
      console.log('Returning data directly:', data);
      return data;
    } else {
      console.error('Unexpected data structure:', data);
      return [];
    }
  } catch (err) {
    console.error('Error fetching vans:', err);
    
    // Return fallback data for development
    const fallbackVans = [
      {
        id: 1,
        name: "Wanderer Pro",
        type: "Camper",
        price: 149,
        location: "Portland, OR",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
        sleeps: 2,
        available: true
      },
      {
        id: 2,
        name: "Horizon Explorer",
        type: "Luxury",
        price: 199,
        location: "Seattle, WA",
        image: "https://images.unsplash.com/photo-1669665462848-b977ff198756?q=80&w=1600&auto=format&fit=crop",
        sleeps: 4,
        available: true
      },
      {
        id: 3,
        name: "Road Tripper",
        type: "Budget",
        price: 99,
        location: "Denver, CO",
        image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=1600&auto=format&fit=crop",
        sleeps: 2,
        available: false
      }
    ];
    
    console.log('Using fallback data:', fallbackVans);
    return fallbackVans;
  }
}

export async function getVanById(id: string) {
  try {
    console.log('Fetching van by ID:', id, 'from:', `${API_URL}/api/van/${id}`);
    
    const res = await fetch(`${API_URL}/api/van/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Van detail response status:', res.status);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Van detail response:', data);
    
    return data;
  } catch (err) {
    console.error('Error fetching van by ID:', err);
    throw err;
  }
}