import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';

import { Gpu } from './gpu';
import { GpuCreationParams, GpusService } from './gpusService';

@Route('gpus')
export class GpusController extends Controller {
  @Get()
  public async getGpus(): Promise<Array<Gpu>> {
    return new GpusService().getAll();
  }

  @Get('{id}')
  public async getGpu(@Path() id: Gpu['id']): Promise<Gpu | void> {
    return new GpusService().get(id);
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createGpu(
    @Body() requestBody: GpuCreationParams,
  ): Promise<void> {
    this.setStatus(201);
    new GpusService().create(requestBody);
    return;
  }
}
