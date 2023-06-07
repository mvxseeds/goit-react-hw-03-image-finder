import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({src="hehe", alt="nothehe"}) => {
    return (
        <GalleryItem>
            <GalleryItemImage src={src} alt={alt} />
        </GalleryItem>
    );
};

export default ImageGalleryItem;
