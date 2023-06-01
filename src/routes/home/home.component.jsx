import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.components';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://iili.io/Hr6hHf1.jpg',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://iili.io/Hr6XmxV.jpg',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://iili.io/Hr6XyiP.jpg',
    },
    {
      id: 4,
      title: 'Masks',
      imageUrl: 'https://iili.io/Hr6XDDQ.jpg',
    },
    {
      id: 5,
      title: 'Gloves',
      imageUrl: 'https://iili.io/Hr6Nk1S.jpg',
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
