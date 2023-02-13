export const ImageGallaryItem = ({ images, onClick }) => {
  return images.map(({ id, webformatURL, tags }) => (
    <li className="ImageGalleryItem" key={id} onClick={onClick()}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  ));
};
