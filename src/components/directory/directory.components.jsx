import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: 'https://iili.io/Hr6hHf1.jpg',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl: 'https://iili.io/Hr6XmxV.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl: 'https://iili.io/Hr6XyiP.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'Masks',
    imageUrl: 'https://iili.io/Hr6XDDQ.jpg',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'Gloves',
    imageUrl: 'https://iili.io/Hr6Nk1S.jpg',
    route: 'shop/mens',
  },
];
const Directory = () => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
