import React from "react";

const Features: React.FC = () => {
  const posts = [
    {
      image: "f1.jpg",
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "f2.jpg",
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "f3.jpg",
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div style={styles.featuresContainer}>
      <div style={styles.header}>
        <p style={styles.subheading}>Practice Advice</p>
        <h2 style={styles.heading}>Featured Posts</h2>
        <p style={styles.description}>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div style={styles.posts}>
        {posts.map((post, index) => (
          <div style={styles.post} key={index}>
            <div style={styles.imageContainer}>
              <img src={post.image} alt={`Feature ${index + 1}`} style={styles.image} />
              <span style={styles.badge}>NEW</span>
            </div>
            <div style={styles.postContent}>
              <p style={styles.tags}>Google Trending New</p>
              <h3 style={styles.title}>{post.title}</h3>
              <p style={styles.description}>{post.description}</p>
              <div style={styles.meta}>
                <span>{post.date}</span>
                <span>{post.comments}</span>
              </div>
              <a href="#" style={styles.learnMore}>
                Learn More &#x2192;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  featuresContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    marginBottom: "30px",
  },
  subheading: {
    color: "#0066cc",
    fontSize: "14px",
    textTransform: "uppercase",
    marginBottom: "5px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#777",
  },
  posts: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  post: {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "200px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#ff3366",
    color: "white",
    padding: "5px 10px",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "5px",
  },
  postContent: {
    padding: "20px",
  },
  tags: {
    color: "#777",
    fontSize: "12px",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  meta: {
    fontSize: "12px",
    color: "#999",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  learnMore: {
    color: "#0066cc",
    fontSize: "14px",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Features;
