import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AreasModule } from './areas/areas.module';
import { AddressesModule } from './addresses/addresses.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { RoutesModule } from './routes/routes.module';
import { OprtypesModule } from './oprtypes/oprtypes.module';
import { OprstatesModule } from './oprstates/oprstates.module';
import { OperationsModule } from './operations/operations.module';
import { OpritemsModule } from './opritems/opritems.module';
import { UnitsModule } from './units/units.module';
import { VouchersModule } from './vouchers/vouchers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    AuthModule,
    UsersModule,
    RolesModule,
    AreasModule,
    AddressesModule,
    CategoriesModule,
    ProductsModule,
    RoutesModule,
    OprtypesModule,
    OprstatesModule,
    OperationsModule,
    OpritemsModule,
    UnitsModule,
    VouchersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
