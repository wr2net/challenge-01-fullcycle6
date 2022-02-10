import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const status = {
      status: 200,
      message: "It's working!",
    };
    return JSON.parse(JSON.stringify(status));
  }
}
