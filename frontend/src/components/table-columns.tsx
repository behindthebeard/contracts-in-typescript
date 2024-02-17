"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Gpu } from "../types";
import { assertNever } from "../utils";

export const tableColumns: ColumnDef<Gpu>[] = [
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: Gpu["status"] = row.getValue("status");

      switch (status) {
        case "inStock":
          return <div className="text-green-600">In Stock</div>;
        case "outOfStock":
          return <div className="text-red-600">Out of Stock</div>;
        case "comingSoon":
          return <div className="text-yellow-600">Coming Soon</div>;
        default:
          assertNever(status);
          return null;
      }
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-right">{formatted}</div>;
    },
  },
];
