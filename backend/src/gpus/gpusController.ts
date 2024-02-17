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
  public async getUsers(): Promise<Array<Gpu>> {
    return new GpusService().getAll();
  }

  @Get('{id}')
  public async getUser(@Path() id: Gpu['id']): Promise<Gpu | void> {
    return new GpusService().get(id);
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(
    @Body() requestBody: GpuCreationParams,
  ): Promise<void> {
    this.setStatus(201);
    new GpusService().create(requestBody);
    return;
  }
}
