import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello() {
    const appName =
      this.configService.get<string>('PROYECT_NAME') || 'pn default';
    return {
      state: 'ALIVE',
      projectName: appName,
    };
  }
}
