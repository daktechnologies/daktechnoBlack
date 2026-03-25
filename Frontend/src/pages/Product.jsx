import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, ChevronRight, Eye, ShoppingCart } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProductDetailModal from '../utils/ProductDetailModal'; // Import karein

const Product = () => {
  const navigate = useNavigate();
  const container = useRef();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStock, setSelectedStock] = useState('All');
  const [sortBy, setSortBy] = useState('Newest First');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const allProducts = [
    { id: 1, name: "Enterprise CRM System", category: "Software", price: 450000, originalPrice: 550000, image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800&q=80", stock: true, rating: 4.8, reviews: 102 },
    { id: 2, name: "SaaS Starter Kit", category: "Software", price: 75000, originalPrice: 95000, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", stock: true, rating: 4.5, reviews: 45 },
    { id: 3, name: "Cloud Infrastructure Setup", category: "Cloud", price: 1250000, originalPrice: 1500000, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", stock: true, rating: 4.9, reviews: 88 },
    { id: 4, name: "E-Commerce Engine", category: "Software", price: 280000, originalPrice: 350000, image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80", stock: true, rating: 4.7, reviews: 120 },
    { id: 5, name: "Cyber Security Audit", category: "Security", price: 150000, originalPrice: 200000, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", stock: true, rating: 4.6, reviews: 67 },
    { id: 6, name: "AI Predictive Analytics", category: "AI & Data", price: 650000, originalPrice: 800000, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", stock: true, rating: 4.8, reviews: 34 },
    { id: 7, name: "Mobile App Framework", category: "Software", price: 180000, originalPrice: 220000, image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80", stock: true, rating: 4.4, reviews: 56 },
    { id: 8, name: "Database Migration Tool", category: "Cloud", price: 210000, originalPrice: 270000, image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80", stock: true, rating: 4.3, reviews: 29 },
    { id: 9, name: "Blockchain Ledger", category: "Security", price: 850000, originalPrice: 1100000, image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80", stock: true, rating: 4.9, reviews: 12 },
    { id: 10, name: "Business Intelligence Hub", category: "AI & Data", price: 420000, originalPrice: 500000, image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800&q=80", stock: true, rating: 4.7, reviews: 78 },
    { id: 11, name: "API Gateway Manager", category: "Cloud", price: 310000, originalPrice: 380000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&q=80", stock: true, rating: 4.5, reviews: 41 },
    { id: 12, name: "Custom ERP Suite", category: "Software", price: 1850000, originalPrice: 2200000, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", stock: true, rating: 4.9, reviews: 215 },
  ];

  const categories = ['All Categories', 'Software', 'Cloud', 'Security', 'AI & Data'];
  const stockOptions = ['All', 'In Stock', 'Out of Stock'];
  const sortOptions = ['Newest First', 'Price: Low to High', 'Price: High to Low', 'Most Popular'];

  // Filter products
  let filtered = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    const matchesStock = selectedStock === 'All' || (selectedStock === 'In Stock' ? product.stock : !product.stock);
    return matchesSearch && matchesCategory && matchesStock;
  });

  // Sort products
  if (sortBy === 'Price: Low to High') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'Price: High to Low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'Most Popular') {
    filtered = [...filtered].sort((a, b) => b.id - a.id);
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filtered.slice(startIndex, startIndex + itemsPerPage);

  // Initial Animation (Header & Sidebar)
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".product-header",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(".product-sidebar",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
  }, { scope: container });
  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Product Grid Animation (Runs on filter/page change)
  useGSAP(() => {
    gsap.fromTo(".product-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, { scope: container, dependencies: [paginatedProducts], revertOnUpdate: true });

  return (
    <section ref={container} className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 product-header">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-700 text-white hover:bg-secondary-800 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="products-title text-4xl md:text-5xl text-center font-bold text-secondary-900 mb-6">
            Our <span className="text-secondary-700">Products</span>
          </h1>
          <p className="text-gray-600 mt-2 text-center">Discover our comprehensive range of custom software engines, cloud infrastructure models, and enterprise-grade digital assets designed for power and scale.</p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar - Filters */}
          <div className="product-sidebar w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow">
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Search Products</label>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-700"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-700"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Stock Status</label>
                <div className="space-y-2">
                  {stockOptions.map(option => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="stock"
                        value={option}
                        checked={selectedStock === option}
                        onChange={(e) => {
                          setSelectedStock(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="w-4 h-4 text-secondary-700"
                      />
                      <span className="ml-2 text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-700"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Categories');
                  setSelectedStock('All');
                  setSortBy('Newest First');
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Info */}
            <div className="bg-white p-4 rounded-lg shadow mb-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1} of {filtered.length} products | Page {currentPage} of {totalPages}
              </div>

              {/* <div className="flex gap-2">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">⊞</button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">≡</button>
              </div> */}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedProducts.map((product) => (
                <div key={product.id} className="product-item bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-200 h-56">
                    {/* <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    /> */}
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                      }}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />

                    <div className="absolute top-3 left-3 bg-secondary-700 text-white px-3 py-1 rounded text-xs font-semibold">
                      {product.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-secondary-700">
                        ₹{product.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </div>
                    </div>

                    {/* Stock Status */}
                    <div className="mb-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${product.stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {product.stock ? '✓ In Stock' : '✗ Out of Stock'}
                      </span>
                    </div>

                    <ProductDetailModal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      product={selectedProduct}
                    />

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewDetails(product)} // Ye update karein
                        className="flex-1 px-4 py-2 border-2 border-secondary-700 text-secondary-700 rounded-lg font-medium hover:bg-secondary-50 transition-colors flex items-center justify-center gap-2"
                      >                        <Eye size={18} />
                        View Details
                      </button>
                      <button
                        disabled={!product.stock}
                        className={`flex-1 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${product.stock
                          ? 'bg-secondary-700 text-white hover:bg-secondary-800'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded ${page === currentPage
                    ? 'bg-secondary-700 text-white font-semibold'
                    : 'border border-gray-300 hover:bg-gray-100'
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
