import React, { useEffect, useState } from "react";
import Particule from "../../components/layout/Particule.jsx";
import "./blog.css";

function BlogCard({ post }) {
  return (
    <div className="blog-card">
      {post.imageUrl && (
        <div className="blog-image-wrapper">
          <img src={post.imageUrl} alt={post.title} className="blog-image" />
        </div>
      )}
      <div className="blog-content">
        <h2 className="blog-title">{post.title}</h2>
        {post.user && (
          <p className="blog-author">
            <strong>Autor:</strong> {post.user.name}
          </p>
        )}
        <p className="blog-date">
          <small>{new Date(post.createdAt).toLocaleDateString()}</small>
        </p>
        <p className="blog-description">{post.description}</p>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const res = await fetch("http://localhost:3000/api/blogs");
        if (!res.ok) throw new Error("Error al obtener blog posts");

        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  return (
    <>
      <Particule />
      <section className="blog-section">
        <div className="container">
          <h1 className="blog-heading">Historias y Noticias</h1>
          {loading && <p className="loading-text">Cargando blog posts...</p>}
          {error && <p className="error-text">Error: {error}</p>}
          {!loading && posts.length === 0 && (
            <p className="empty-text">No hay blog posts disponibles.</p>
          )}

          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
