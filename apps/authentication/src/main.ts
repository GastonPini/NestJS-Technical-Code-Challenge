import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP, ///
    options: {
      host: '0.0.0.0',
      port: parseInt(process.env.AUTH_TCP_PORT || '8877', 10), ///
    },
  });

  await app.listen();
  console.log(`Authentication microservice listening on TCP port ${process.env.AUTH_TCP_PORT || '8877'}`);
}
bootstrap();