import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { SessionModule } from "./session/session.module";
import { WebsiteModule } from "./website/website.module";
import { WebsiteEventModule } from "./websiteEvent/websiteEvent.module";
import { EventDatumModule } from "./eventDatum/eventDatum.module";
import { SessionDatumModule } from "./sessionDatum/sessionDatum.module";
import { TeamModule } from "./team/team.module";
import { TeamUserModule } from "./teamUser/teamUser.module";
import { TeamWebsiteModule } from "./teamWebsite/teamWebsite.module";
import { ReportModule } from "./report/report.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    SessionModule,
    WebsiteModule,
    WebsiteEventModule,
    EventDatumModule,
    SessionDatumModule,
    TeamModule,
    TeamUserModule,
    TeamWebsiteModule,
    ReportModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
