import React from 'react';
import blogData from '../constants/BlogData';
import Footer from '../components/HomeNavComponents/Footer';
import { Link } from 'react-router-dom';

export function BlogPage() {
    return (
        <div>
            <div className="w-full mx-auto xl:px-20 md:px-10 px-4">
                <div className="py-8">
                    <h1 className="text-2xl font-semibold mb-4">Blogs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {blogData.map(blog => (
                            <div key={blog.id} className="border border-gray-200 p-4 rounded-lg flex flex-col justify-between">
                                <div>
                                    <img src={blog.imgSrc} alt={blog.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                                    <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                                    <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
                                </div>
                                <div className='my-1'>
                                    <Link to={`/blogs/${blog.id}`} className="text-neutral-200 rounded bg-neutral-900 p-2 hover:underline-600 hover:underline">Read more</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
