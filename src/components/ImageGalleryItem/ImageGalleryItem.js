import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = () => {
    return (
        <GalleryItem>
            <GalleryItemImage src={src} alt={alt} />
        </GalleryItem>
    );
};

export default ImageGalleryItem;
