// pages/api/vans.js

export default function handler(req, res) {
    const vansData = [
      {
        id: 1,
        name: 'Adventure Van',
        location: 'California',
        type: 'camper',
        price: 150,
      },
      {
        id: 2,
        name: 'Beach Van',
        location: 'Florida',
        type: 'beach',
        price: 200,
      },
      {
        id: 3,
        name: 'Mountain Van',
        location: 'Colorado',
        type: 'mountain',
        price: 180,
      },
      // Add more vans here
    ];
  
    res.status(200).json(vansData);
  }
  