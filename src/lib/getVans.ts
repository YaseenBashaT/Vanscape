export async function getVans() {
    try {
        const response = await fetch('http://localhost:5000/api/van'); // Corrected endpoint
        const result = await response.json();
        return result.data; // Access the array of vans from the response
      } catch (err) {
        console.error('Error fetching vans:', err);
        return []; // Return an empty array in case of an error
      }
  }
  