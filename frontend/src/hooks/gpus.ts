'use client';

import { useQuery } from '@tanstack/react-query';

import { Gpu } from '../backend-api';
import { getBackendApi } from '../lib/api';

const fetchGpus = async () => {
  const response = await getBackendApi().gpus.getGpus();

  return response.data;
};

const useGpus = () => {
  return useQuery({
    queryKey: ['gpus'],
    queryFn: () => fetchGpus(),
  });
};

const fetchGpuById = async (id: Gpu['id']) => {
  const response = await getBackendApi().gpus.getGpu(id);

  return response.data;
};

const useGpuById = (id?: Gpu['id']) => {
  return useQuery({
    queryKey: ['gpus', id],
    queryFn: () => fetchGpuById(id ?? ''),
    enabled: !!id,
  });
};

export { fetchGpuById, fetchGpus, useGpuById, useGpus };
