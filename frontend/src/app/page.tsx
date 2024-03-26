'use client';

import { GpuDataTable } from '../components/gpu-table';
import { gpuTableColumns } from '../components/gpu-table-columns';
import { TableError } from '../components/table-error';
import { TableLoading } from '../components/table-loading';
import { ThemeModeToggle } from '../components/theme-mode-toggle';
import { Separator } from '../components/ui/separator';
import { useGpus } from '../hooks/gpus';

export default function Home() {
  const { data: gpus, isLoading, isFetching, isError } = useGpus();

  const showLoading = isLoading || isFetching;

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
        {showLoading && <TableLoading />}
        {isError && <TableError />}
        {gpus && <GpuDataTable columns={gpuTableColumns} data={gpus} />}
      </div>
    </main>
  );
}
