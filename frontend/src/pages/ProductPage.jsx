import { useState, useEffect } from 'react';
import Footer from "../components/HomeNavComponents/Footer";
import { ProductCard } from "../components/ProductComponents/ProductCard";
import axios from 'axios';

export function ProductPage() {
    const [sortingOption, setSortingOption] = useState('none');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/products/all');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const sortProducts = (option) => {
        let sortedProducts = [...products];
        switch (option) {
            case 'priceLowToHigh':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'priceHighToLow':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'ratingLowToHigh':
                sortedProducts.sort((a, b) => a.rating - b.rating);
                break;
            case 'ratingHighToLow':
                sortedProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }
        return sortedProducts;
    };

    const handleSortChange = async (e) => {
        setSortingOption(e.target.value);
        try {
            const response = await axios.get(`/api/products/all?sort=${e.target.value}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching sorted products:', error);
        }
    };

    return (
        <div>
            <div className="w-full mx-auto xl:px-20  md:px-10 px-4">
                <div className="py-8">
                    <h1 className="text-2xl font-semibold mb-4">Products</h1>
                    <div className="mb-4">
                        <label htmlFor="sorting" className="mr-2">Sort by:</label>
                        <select id="sorting" value={sortingOption} onChange={handleSortChange}>
                            <option value="none">Select</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="ratingLowToHigh">Rating: Low to High</option>
                            <option value="ratingHighToLow">Rating: High to Low</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {sortProducts(sortingOption).map((product) => (
                            <ProductCard
                                key={product._id}
                                name={product.name}
                                imageSrc={product.imageSrc}
                                description={product.description}
                                price={product.price}
                                rating={product.rating}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductPage;
