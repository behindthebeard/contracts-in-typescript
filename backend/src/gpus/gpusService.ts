import { v4 as uuidv4 } from 'uuid';
import { Gpu } from './gpu';
import { gpusFixture } from './fixture';

export type GpuCreationParams = Omit<Gpu, 'id'>;

export class GpusService {
  public get(id: Gpu['id']): Gpu | undefined {
    return gpusFixture.find((gpu) => gpu.id === id);
  }

  public create(gpuCreationParams: GpuCreationParams): Gpu {
    return {
      id: uuidv4(),
      ...gpuCreationParams,
    };
  }
}
