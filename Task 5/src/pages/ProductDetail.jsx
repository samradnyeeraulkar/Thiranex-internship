import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-200 border-t-primary-600"></div>
      </div>
    );
  }

  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Catalog
      </Link>

      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Gallery */}
          <div className="relative group">
            <div className="aspect-square bg-gray-50 rounded-2xl p-8 flex items-center justify-center overflow-hidden border border-gray-100">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-sm font-semibold text-primary-600 tracking-wider uppercase mb-2 block">{product.category}</span>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-yellow-400">
                  {'★'.repeat(Math.round(product.rating.rate))}
                  <span className="text-gray-200">
                    {'★'.repeat(5 - Math.round(product.rating.rate))}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {product.rating.rate} Rating ({product.rating.count} reviews)
                </span>
              </div>
              
              <p className="text-4xl font-black text-gray-900 mb-8">${product.price.toFixed(2)}</p>
            </div>

            <div className="prose prose-sm text-gray-500 mb-10 leading-relaxed">
              <p>{product.description}</p>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <button 
                onClick={() => addToCart(product)}
                className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-primary-600 transition-all duration-300 transform active:scale-[0.98] shadow-lg hover:shadow-primary-600/30"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl text-center">
                  <Truck className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-xs font-medium text-gray-600">Free Delivery</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl text-center">
                  <RefreshCw className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-xs font-medium text-gray-600">30 Days Return</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl text-center">
                  <ShieldCheck className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-xs font-medium text-gray-600">2 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
