import img1 from "../../assets/Images/small/photo-1.jpg";
import img3 from "../../assets/Images/small/photo-3.jpg";
import img4 from "../../assets/Images/small/photo-4.jpg";
import img5 from "../../assets/Images/small/photo-5.jpg";
import img6 from "../../assets/Images/small/photo-6.jpg";
import img7 from "../../assets/Images/small/photo-7.jpg";
import img8 from "../../assets/Images/small/photo-8.jpg";
import img9 from "../../assets/Images/small/photo-9.jpg";
import img10 from "../../assets/Images/small/photo-10.jpg";
import img11 from "../../assets/Images/small/photo-11.jpg";
import img12 from "../../assets/Images/small/photo-12.jpg";
import img13 from "../../assets/Images/small/photo-13.jpg";
import img14 from "../../assets/Images/small/photo-14.jpg";
import img15 from "../../assets/Images/small/photo-15.jpg";
import img16 from "../../assets/Images/small/photo-16.jpg";
import img17 from "../../assets/Images/small/photo-17.jpg";
import img18 from "../../assets/Images/small/photo-18.jpg";
import img20 from "../../assets/Images/small/photo-20.jpg";
import styled from "styled-components";
import shuffleArray from "../../utils/shuffleArray";
import { useRef, useState } from "react";
import ImagePreviewModal from "../../components/modals/ImagePreview/ImagePreview";

const images = [
  img1,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img20,
];

const GalleryContainer = styled.div`
  margin: 20px 10%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  grid-column: span 2;
  grid-row: span 3;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.02);
    -webkit-filter: sepia(5%);
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imagesRef = useRef(shuffleArray(images));

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main style={{ backgroundColor: "#efefef" }}>
      <GalleryContainer>
        {imagesRef.current.map((image) => (
          <ImageWrapper>
            <Image src={image} onClick={() => openModal(image)} />
          </ImageWrapper>
        ))}
      </GalleryContainer>
      {selectedImage && (
        <ImagePreviewModal
          show={true}
          imageSrc={selectedImage}
          onClose={closeModal}
        />
      )}
    </main>
  );
};

export default Gallery;
