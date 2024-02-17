"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Gpu } from "../types";

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
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];
