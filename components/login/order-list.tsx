"use client"

import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { getUserOrders } from "@/util/helperFunctions/backend-orders"
import { Order } from "@/util/interfaces/order"
import Link from "next/link"

function OrderList() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Extract the token directly from the Redux store
  const token = useSelector((state: RootState) => state.user.token)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (token) {
          const userOrders = await getUserOrders(token) // Fetch orders using the token from Redux state
          setOrders(userOrders)
        } else {
          setError("No authentication token found")
        }
      } catch (err) {
        console.error(err)
        setError("Failed to load orders")
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      fetchOrders()
    }
  }, [token])

  if (loading) {
    return <p className="text-center">Loading your orders...</p>
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>
  }

  if (orders.length === 0) {
    return (
      <main className="text-center">
        <h2 className="text-xl font-medium text-gray-700">
          You have no orders!
        </h2>
        <p className="text-gray-600">
          Don&apos;t have any orders? Check your{" "}
          <Link className="text-darkOrange hover:underline" href="/cart">
            cart
          </Link>{" "}
          to add items and place an order!
        </p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl p-6">
      <h3 className="mb-6 text-2xl font-semibold text-gray-800">Your Orders</h3>

      {/* Orders Container with Flex and Wrap */}
      <div className="flex max-h-[1500px] overflow-scroll flex-wrap gap-4 ">
        {orders.map(order => (
          <div
            key={order._id}
            className="max-h-[400px] min-w-[300px] max-w-xs flex-1 overflow-hidden rounded-md border border-gray-200 bg-white p-4 pb-5 shadow-md mx-auto"
          >
            <div className="mb-4 flex flex-col items-start justify-between">
              <h4 className="text-xl font-semibold text-gray-700">
                Order ID: {order._id}
              </h4>
              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  order.orderStatus === "pending"
                    ? "bg-yellow-200 text-yellow-800"
                    : order.orderStatus === "paid"
                      ? "bg-green-200 text-green-800"
                      : order.orderStatus === "shipped"
                        ? "bg-blue-200 text-blue-800"
                        : order.orderStatus === "completed"
                          ? "bg-gray-200 text-gray-800"
                          : "bg-red-200 text-red-800"
                }`}
              >
                {order.orderStatus}
              </span>
            </div>
            <p className="mb-2 text-gray-600">
              <strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}
            </p>
            <p className="mb-2 text-gray-600">
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleDateString()}
            </p>

            <div className="mt-4">
              <h5 className="mb-2 text-lg font-medium text-gray-700">Items:</h5>
              <ul className="space-y-2">
                {order.products.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-gray-700"
                  >
                    <span>
                      {item.productName} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default OrderList
