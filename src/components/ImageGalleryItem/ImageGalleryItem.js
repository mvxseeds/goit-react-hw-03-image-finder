import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({imageUrl}) => {
    return (
        <GalleryItem>
            <GalleryItemImage src={imageUrl} alt="image-fallback" />
        </GalleryItem>
    );
};

export default ImageGalleryItem;
