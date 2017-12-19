import { AppRoutingModule } from './app-routing.module';
// demo
import { HomeModule } from './home/home.module';

export const SHARED_MODULES: any[] = [AppRoutingModule, HomeModule];

export * from './app-routing.module';
