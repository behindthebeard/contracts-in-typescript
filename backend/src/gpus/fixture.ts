import { Gpu } from './gpu';

export const gpusFixture: Gpu[] = [
  {
    id: '1',
    brand: 'Nvidia',
    model: 'RTX 3080',
    status: 'inStock',
    price: 699,
    imageUrl:
      'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/images/design/geforce-rtx-3080-4-960.jpg',
    description:
      'The GeForce RTX™ 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.',
  },
  {
    id: '2',
    brand: 'Nvidia',
    model: 'RTX 3070',
    status: 'inStock',
    price: 499,
    imageUrl:
      'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-product-gallery-thumbnail-267-1.jpg',
    description:
      'The GeForce RTX™ 3070 is powered by Ampere—NVIDIA’s 2nd gen RTX architecture. Built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and high-speed G6 memory, it gives you the power you need to rip through the most demanding games.',
  },
  {
    id: '3',
    brand: 'Nvidia',
    model: 'RTX 3060',
    status: 'comingSoon',
    price: 299,
    imageUrl:
      'https://images.nvidia.com/aem-dam/Solutions/geforce/ampere/rtx-3060-ti/geforce-rtx-3060-ti-product-gallery-full-screen-3840-2-bl.jpg',
    description:
      'The GeForce RTX™ 3060 lets you take on the latest games using the power of Ampere—NVIDIA’s 2nd generation RTX architecture. Get incredible performance with enhanced Ray Tracing Cores and Tensor Cores, new streaming multiprocessors, and high-speed G6 memory.',
  },
  {
    id: '4',
    brand: 'Nvidia',
    model: 'RTX 3090',
    status: 'outOfStock',
    price: 1499,
    imageUrl:
      'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/3090ti-gallery/geforce-rtx-3090-ti-product-gallery-thumbnail-267-3.jpg',
    description:
      'The GeForce RTX™ 3090 is a big ferocious GPU (BFGPU) with TITAN class performance',
  },
  {
    id: '5',
    brand: 'AMD',
    model: 'RX 6900 XT',
    status: 'inStock',
    price: 999,
    imageUrl:
      'https://www.amd.com/system/files/2020-10/579976-radeon-rx-6000xt-left-angle-1260x709_0.png',
    description:
      'The AMD Radeon™ RX 6900 XT graphics card, powered by AMD RDNA™ 2 architecture, featuring 80 powerful enhanced Compute Units, 128 MB of all new AMD Infinity Cache and 16GB of dedicated GDDR6 memory, is engineered to deliver ultra-high frame rates and serious 4K resolution gaming.',
  },
  {
    id: '6',
    brand: 'AMD',
    model: 'RX 6800 XT',
    status: 'inStock',
    price: 649,
    imageUrl:
      'https://www.amd.com/system/files/2021-04/766267-radeon-rx-6800xt-gpus-1260x709.png',
    description:
      'The AMD Radeon™ RX 6800 XT graphics card, powered by AMD RDNA™ 2 architecture, featuring 72 powerful enhanced Compute Units, 128 MB of all new AMD Infinity Cache and 16GB of dedicated GDDR6 memory, is engineered to deliver ultra-high frame rates and serious 4K resolution gaming.',
  },
];
