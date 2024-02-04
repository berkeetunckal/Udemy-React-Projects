function ImageItem({image}) {
    return (
        <div>
            <img className="imageListImg" src={image.urls.small} alt={image.title} />
            <p>{image.title}</p>
        </div>
     );
}

export default ImageItem;