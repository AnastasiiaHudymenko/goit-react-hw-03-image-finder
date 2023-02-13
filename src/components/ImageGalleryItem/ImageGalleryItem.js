export const ImageGallaryItem = ({ images }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id}>
      <img width={50} src={webformatURL} alt={tags} />
    </li>
  ));
};
