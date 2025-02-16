"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity-image";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchPosts = async (page = 1, category = "") => {
    setIsLoading(true);
    const pageSize = 6;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    let query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      content,
      categories[]->{title},
      excerpt
    }`;

    if (category) {
      query = `*[_type == "post" && '${category}' in categories[]->title] | order(publishedAt desc) {
        title,
        slug,
        mainImage,
        content,
        categories[]->{title},
        excerpt
      }`;
    }

    try {
      const result = await client.fetch(query);
      setPosts(result.slice(start, end));
      setTotalPages(Math.ceil(result.length / pageSize));
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
      setTotalPages(1);
    }
    setIsLoading(false);
  };

  const fetchCategories = async () => {
    try {
      const result = await client.fetch(`*[_type == "category"] { title }`);
      setCategories(result);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage, selectedCategory);
    fetchCategories();
  }, [currentPage, selectedCategory]); // Added currentPage and selectedCategory to dependencies

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchPosts(newPage, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    fetchPosts(1, category);
  };

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Loading Curchs...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-secondary dark:bg-black">
      <div className="container mx-auto px-4 flex flex-col">
        <h2 className="text-3xl font-bold mb-8 text-center">See Our Journey</h2>

        <div className="mb-8 bg-secondary text-center">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="p-2 border rounded "
          >
            <option value="">All Churchs</option>
            {categories.map((category) => (
              <option key={category.title} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.slug.current} className="border rounded-lg overflow-hidden border-transparent">
                {post.mainImage && (
                  <motion.div
                    initial={{ opacity: 0.5, y: 0, scale: 1 }}
                    whileHover={{ opacity: 1, y: -20, scale: 1.1 }}
                    transition={{ duration: 1 }}
                  >
                    <div>
                      <Image
                        src={urlForImage(post.mainImage).url() || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={400}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                  </motion.div>
                )}
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2">{post.title}</h3>
                  {/* <p className="text-gray-600 mb-4">{post.excerpt}</p> */}
                  <div className="text-sm font-semibold mb-2">
                    <PortableText value={post.content} />
                  </div>
                  <div className=" flex-wrap gap-2">
                    {post.categories &&
                      post.categories.map((category) => (
                        <span key={category.title} className="bg-gray-200  py-1 rounded text-sm dark:text-black">
                          {category.title}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No posts found.</p>
        )}

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded ${currentPage === page ? "bg-blue-500  text-white" : "bg-gray-200 text-black"}`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
