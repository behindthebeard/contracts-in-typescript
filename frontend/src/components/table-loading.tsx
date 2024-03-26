'use-client';

import React from 'react';
import { Progress } from './ui/progress';

export function TableLoading() {
  const [progress, setProgress] = React.useState(5);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}
