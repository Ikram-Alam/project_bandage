// import React from "react";

// const Category: React.FC = () => {
//   return (
//     <div style={styles.categoryContainer}>
//       <img
//         src="c2.png" // Path to the image in the 'public' folder
//         alt="Category"
//         style={styles.categoryImage}
//       />
//     </div>
//   );
// };

// const styles = {
//   categoryContainer: {
//     // width: "1440px",
//     width:"1439px", // Full width of the container
//     // height: "770px"
//     height: "auto", // Full height of the container
//     // padding: "0px 195px", // Padding on left and right
//     gap: "40px",
//     display: "flex",
//     justifyContent: "center", // Centers the image horizontally
//     alignItems: "center", // Centers the image vertically
//     margin: "0 auto",
//     background: "#F5F5F5", // Optional background color
//     overflow: "hidden", // Prevents the image from overflowing the container
//   } as React.CSSProperties,
//   categoryImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover", // Ensures image fits the container maintaining aspect ratio
//   } as React.CSSProperties,
// };

// export default Category;






import React from "react";
import Image from "next/legacy/image";

const CategorySection: React.FC = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>EDITORS PICK</h2>
      <p style={styles.subtitle}>Problems trying to resolve the conflict between</p>
      <div style={styles.gridContainer}>
        {/* Men Section */}
        <div style={styles.itemContainer}>
          <Image  src="/c1.png"  alt="Men"  layout="fill"  objectFit="cover" style={styles.image}/>
          <div style={styles.overlay}>
            <span style={styles.label}>MEN</span>
          </div>
        </div>

        {/* Women Section */}
        <div style={styles.itemContainer}>
          <Image src="/c2.jpg"  alt="Women"  layout="fill"  objectFit="cover" style={styles.image}/>
          <div style={styles.overlay}>
            <span style={styles.label}>WOMEN</span>
          </div>
        </div>

        {/* Accessories Section */}
        <div style={styles.itemContainer}>
          <Image  src="/c3.jpg"  alt="Accessories"  layout="fill" objectFit="cover" style={styles.image}/>
          <div style={styles.overlay}>
            <span style={styles.label}>ACCESSORIES</span>
          </div>
        </div>

        {/* Kids Section */}
        <div style={styles.itemContainer}>
          <Image  src="/c4.jpg"
            alt="Kids"  layout="fill"  objectFit="cover"  style={styles.image}/>
          <div style={styles.overlay}>
            <span style={styles.label}>KIDS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2A2A2A",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#7A7A7A",
    marginBottom: "30px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    justifyContent: "center",
  },
  itemContainer: {
    position: "relative",
    width: "100%",
    paddingTop: "100%",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
    background: "#fff",
   // color: "#2A2A2A",
    padding: "10px 20px",
    borderRadius: "20px",
  },
};

export default CategorySection;
