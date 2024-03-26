import { gpusFixture } from '../gpus/fixture';
import { GpuCreationParams, GpusService } from '../gpus/gpusService';

describe('GpusService', () => {
  let gpusService: GpusService;

  beforeEach(() => {
    gpusService = new GpusService();
  });

  describe('getAll', () => {
    it('should return all GPUs', () => {
      const gpus = gpusService.getAll();
      expect(gpus).toEqual(gpusFixture);
    });
  });

  describe('get', () => {
    it('should return the GPU with the specified id', () => {
      const gpuId = '123';
      const gpu = gpusService.get(gpuId);
      expect(gpu).toEqual(gpusFixture.find((gpu) => gpu.id === gpuId));
    });

    it('should return undefined if the GPU with the specified id does not exist', () => {
      const gpuId = '456';
      const gpu = gpusService.get(gpuId);
      expect(gpu).toBeUndefined();
    });
  });

  describe('create', () => {
    it('should create a new GPU with a unique id', () => {
      const gpuCreationParams: GpuCreationParams = {
        brand: 'Nvidia',
        model: 'RTX 3080',
        status: 'inStock',
        price: 699,
        description: 'The Nvidia RTX 3080 is a powerful GPU.',
      };
      const gpu = gpusService.create(gpuCreationParams);

      expect(gpu).toEqual({
        id: gpu.id,
        ...gpuCreationParams,
      });
    });
  });
});
