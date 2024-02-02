import { Gpu } from './gpu';

export const gpusFixture: Gpu[] = [
  {
    id: '1',
    brand: 'Nvidia',
    model: 'RTX 3080',
    status: 'inStock',
    price: 699,
    imageUrl:
      'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/geforce-rtx-3080-shop-1.jpg',
  },
  {
    id: '2',
    brand: 'Nvidia',
    model: 'RTX 3070',
    status: 'inStock',
    price: 499,
    imageUrl:
      'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-shop-1.jpg',
  },
  {
    id: '3',
    brand: 'Nvidia',
    model: 'RTX 3060',
    status: 'comingSoon',
    price: 299,
    imageUrl:
      'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3060/geforce-rtx-3060-shop-1.jpg',
  },
  {
    id: '4',
    brand: 'Nvidia',
    model: 'RTX 3090',
    status: 'outOfStock',
    price: 1499,
    imageUrl:
      'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-shop-1.jpg',
  },
  {
    id: '5',
    brand: 'AMD',
    model: 'RX 6900 XT',
    status: 'inStock',
    price: 999,
    imageUrl:
      'https://www.amd.com/system/files/2020-10/616200-radeon-rx-6900-xt-1260x709.jpg',
  },
  {
    id: '6',
    brand: 'AMD',
    model: 'RX 6800 XT',
    status: 'inStock',
    price: 649,
    imageUrl:
      'https://www.amd.com/system/files/2020-10/616200-radeon-rx-6800-xt-1260x709.jpg',
  },
];
