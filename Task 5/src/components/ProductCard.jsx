import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <Link to={`/products/${product.id}`} className="block relative aspect-[4/3] overflow-hidden bg-gray-50 p-6">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm border border-gray-100">
          {product.category}
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/products/${product.id}`} className="block mt-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="mt-1 flex items-center gap-2 mb-4">
          <div className="flex items-center text-yellow-400 text-sm">
            {'★'.repeat(Math.round(product.rating.rate))}
            <span className="text-gray-300">
              {'★'.repeat(5 - Math.round(product.rating.rate))}
            </span>
          </div>
          <span className="text-xs text-gray-500">({product.rating.count} reviews)</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-primary-600 transition-colors duration-200 active:scale-95"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
