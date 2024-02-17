'use client';

import Image from 'next/image';
import { ThemeModeToggle } from '../components/theme-mode-toggle';
import { Separator } from '../components/ui/separator';
import { GpuDataTable } from '../components/gpu-table';
import { gpuTableColumns } from '../components/gpu-table-columns';
import { useGpus } from '../hooks/gpus';
import React from 'react';
import { Progress } from '../components/ui/progress';

export default function Home() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    if (progress >= 90) return;
    const timer = setTimeout(() => setProgress(progress + 10), 200);
    return () => clearTimeout(timer);
  }, [progress]);

  const { data: gpus, isLoading } = useGpus();

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
        {isLoading ? (
          <div className="w-full md:w-auto">
            <Progress value={progress} />
          </div>
        ) : (
          <GpuDataTable columns={gpuTableColumns} data={gpus ?? []} />
        )}
      </div>
    </main>
  );
}
