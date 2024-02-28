'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Gpu } from '../api';
import { apiURL } from '../constants';

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

export { fetchGpuById, fetchGpus, useGpuById, useGpus };
