'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Gpu } from '../types';
import { assertNever } from '../utils';
import { Button } from './ui/button';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { GpuDialog } from './gpu-dialog';

export const gpuTableColumns: ColumnDef<Gpu>[] = [
  {
    accessorKey: 'brand',
    header: 'Brand',
  },
  {
    accessorKey: 'model',
    header: 'Model',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;

      switch (status) {
        case 'inStock':
          return <div className="text-green-600">In Stock</div>;
        case 'outOfStock':
          return <div className="text-red-600">Out of Stock</div>;
        case 'comingSoon':
          return <div className="text-yellow-600">Coming Soon</div>;
        default:
          assertNever(status);
          return null;
      }
    },
  },
  {
    accessorKey: 'price',
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = row.original.price;
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    header: () => <div className="text-right">Details</div>,
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <div className="text-right">
          <GpuDialog id={id} />
        </div>
      );
    },
  },
];
