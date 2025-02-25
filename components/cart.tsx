import { useAppSelector } from "@/lib/hooks";


export default function Cart(){
  const cart = useAppSelector((state) => state.cart.cartItems)
    console.log(cart);
    
    return(
        <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md flex justify-between items-center">
              <span className="font-medium">{item.title}</span>
              <div className="flex items-center gap-2">
                <button >-</button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button >+</button>
              </div>
              <span className="text-gray-600">${item.price * item.quantity}</span>
              <button >
                remove
              </button>
            </div>
          ))}
          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total:</span>
            <span>$value</span>
          </div>
          <button className="w-full mt-4">Proceed to Checkout</button>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
    );
}