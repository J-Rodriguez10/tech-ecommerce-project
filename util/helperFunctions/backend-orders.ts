import axios from 'axios';

/***
 * Fetches authenticated user orders via a GET request, using a JWT token for
 * authorization.
 */
export const getUserOrders = async (token: string) => {
  try {
    // Log the token and the request being made
    console.log('Fetching orders with token:', token);

    // Make the GET request to fetch orders
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Include the JWT token for authentication
      },
    });

    // Log the successful response
    console.log('Orders fetched successfully:', response.data.orders);

    // Assuming the data returned contains the orders
    return response.data.orders;
  } catch (error) {
    // Log any errors during the request
    console.error('Error fetching orders:', error);
    throw error;
  }
};
