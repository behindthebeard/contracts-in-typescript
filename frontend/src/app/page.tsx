"use client";

import Image from "next/image";
import { ThemeModeToggle } from "../components/theme-mode-toggle";
import { Separator } from "../components/ui/separator";
import { DataTable } from "../components/table";
import { tableColumns } from "../components/table-columns";
import { useGpus } from "../hooks/gpus";

export default function Home() {
  const { data } = useGpus();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full space-y-5">
        <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            GPU inventory
          </h1>
          <ThemeModeToggle />
        </div>
        <Separator />
        <DataTable columns={tableColumns} data={data ?? []} />
      </div>
    </main>
  );
}
