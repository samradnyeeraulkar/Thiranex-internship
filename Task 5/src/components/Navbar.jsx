import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 text-primary-600 font-bold text-xl hover:text-primary-700 transition">
            <Store className="w-6 h-6" />
            <span>StyleStore</span>
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium transition">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-primary-600 font-medium transition">Catalog</Link>
          </div>

          <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary-600 transition">
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
