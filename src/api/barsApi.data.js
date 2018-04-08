import { productsData } from './productsApi.data';

import bannermansImg from '../assets/img/bars/bannermans.jpg';
import brewDogImg from '../assets/img/bars/brew-dog.jpg';
import captainsBarImg from '../assets/img/bars/the-captains-bar.jpg';
import nineaImg from '../assets/img/bars/the-9a.jpg';
import southernImg from '../assets/img/bars/the-southern.jpg';
import jazzBarImg from '../assets/img/bars/the-jazz-bar.jpg';

export const barData = [
  {
    id: 0,
    name: 'Bannerman\'s Bar',
    lat: 0,
    long: 0,
    imageUrl: bannermansImg,
    products: productsData,
  },
  {
    id: 1,
    name: 'BrewDog Edinburgh',
    lat: 0,
    long: 0,
    imageUrl: brewDogImg,
    products: productsData,
  },
  {
    id: 2,
    name: 'Bannerman\'s Bar',
    lat: 0,
    long: 0,
    imageUrl: bannermansImg,
    products: productsData,
  },
  {
    id: 3,
    name: 'Captains Bar',
    lat: 0,
    long: 0,
    imageUrl: captainsBarImg,
    products: productsData,
  },
  {
    id: 4,
    name: 'The Holyrood 9A',
    lat: 0,
    long: 0,
    imageUrl: nineaImg,
    products: productsData,
  },
  {
    id: 5,
    name: 'The Southern',
    lat: 0,
    long: 0,
    imageUrl: southernImg,
    products: productsData,
  },
  {
    id: 6,
    name: 'Jazz Bar',
    lat: 0,
    long: 0,
    imageUrl: jazzBarImg,
    products: productsData,
  },
];

Object.freeze(barData);
export default barData;
