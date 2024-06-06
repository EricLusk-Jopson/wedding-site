import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 20px;
`;

const GalleryItem = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const Gallery: React.FC = () => {
  const images = [
    { src: "../../assets/images/1.jpg", width: "300px", height: "200px" },
    { src: "path/to/image2.jpg", width: "150px", height: "300px" },
    { src: "path/to/image3.jpg", width: "400px", height: "400px" },
    // Add more images as needed
  ];

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          style={{ backgroundImage: `url(${image.src})` }}
          width={image.width}
          height={image.height}
        />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
