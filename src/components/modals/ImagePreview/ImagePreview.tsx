import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";

interface ImagePreviewModalProps {
  show: boolean;
  imageSrc: string;
  onClose: () => void;
}

const ImagePreviewModalBackground = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
`;

const ImagePreviewModalContent = styled.div`
  position: relative;
  width: fit-content;
  height: 100vh;
  padding: 20px 0px;
  max-width: 90vw;
  margin: 0 auto; /* Center horizontally */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const ImagePreviewModalImage = styled.img`
  max-height: 100%;
  max-width: 90vw;
  height: auto;
`;

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  show,
  imageSrc,
  onClose,
}) => {
  return (
    <ImagePreviewModalBackground show={show} onClick={onClose}>
      <ImagePreviewModalContent onClick={(e) => e.stopPropagation()}>
        <ImagePreviewModalImage src={imageSrc} alt="Enlarged" />
      </ImagePreviewModalContent>
      <Box sx={{ position: "absolute", top: 10, right: 10, color: "white" }}>
        <IconButton
          aria-label="Close popup modal"
          onClick={onClose}
          sx={{ color: "#fff" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </ImagePreviewModalBackground>
  );
};

export default ImagePreviewModal;
