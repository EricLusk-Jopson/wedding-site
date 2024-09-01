import img1 from "../../assets/Images/photo-1.jpg";
import img3 from "../../assets/Images/photo-3.jpg";
import img4 from "../../assets/Images/photo-4.jpg";
import img5 from "../../assets/Images/photo-5.jpg";
import img6 from "../../assets/Images/photo-6.jpg";
import img7 from "../../assets/Images/photo-7.jpg";
import img8 from "../../assets/Images/photo-8.jpg";
import img9 from "../../assets/Images/photo-9.jpg";
import img10 from "../../assets/Images/photo-10.jpg";
import img11 from "../../assets/Images/photo-11.jpg";
import img12 from "../../assets/Images/photo-12.jpg";
import img13 from "../../assets/Images/photo-13.jpg";
import img14 from "../../assets/Images/photo-14.jpg";
import img15 from "../../assets/Images/photo-15.jpg";
import img16 from "../../assets/Images/photo-16.jpg";
import img17 from "../../assets/Images/photo-17.jpg";
import img18 from "../../assets/Images/photo-18.jpg";
import img20 from "../../assets/Images/photo-20.jpg";
import shuffleArray from "../../utils/shuffleArray";
import { useRef, useState } from "react";
import ImagePreviewModal from "../../components/modals/ImagePreview/ImagePreview";
import styles from "./Gallery.module.css";

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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const imagesRef = useRef(shuffleArray(images));

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleHeroImageLoad = () => {
    setHeroImageLoaded(true);
  };

  return (
    <main style={{ backgroundColor: "#efefef" }}>
      <section className={styles.hero}>
        <img src={img9} onLoad={handleHeroImageLoad} />
        {heroImageLoaded && <h1 className={styles.centeredTitle}>Gallery</h1>}
      </section>

      {heroImageLoaded && (
        <section className={styles.galleryContainer}>
          {imagesRef.current.map((image, index) => (
            <div className={styles.imageWrapper} key={index}>
              <img
                className={styles.image}
                src={image}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </section>
      )}

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
