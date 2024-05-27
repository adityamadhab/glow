import { useParams } from "react-router-dom";
import blogData from "../constants/BlogData";

export function BlogsDetailPage() {
    const { id } = useParams();
    const blog = blogData.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="p-4">
            <div className="bg-neutral-100 rounded-lg m-auto shadow-md p-4 py-12 max-w-5xl overflow-hidden">
                <div className="mb-2 text-left text-sm lg:text-base w-full font-bold">
                    <h1 className="text-4xl font-extrabold mb-6">{blog.title}</h1>
                    <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </div>
        </div>
    );
}
