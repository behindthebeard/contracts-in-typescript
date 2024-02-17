'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { apiURL } from '../constants';
import { Gpu } from '../types';

const fetchGpus = async () => {
  const response = await axios.get<Array<Gpu>>(`${apiURL}/gpus`);

  return response.data;
};

const useGpus = () => {
  return useQuery({
    queryKey: ['gpus'],
    queryFn: () => fetchGpus(),
  });
};

const fetchGpuById = async (id: Gpu['id']) => {
  const response = await axios.get<Gpu>(`${apiURL}/gpus/${id}`);

  return response.data;
};

const useGpuById = (id?: Gpu['id']) => {
  return useQuery({
    queryKey: ['gpus', id],
    queryFn: () => fetchGpuById(id ?? ''),
    enabled: !!id,
  });
};

export { useGpus, fetchGpus, useGpuById, fetchGpuById };
