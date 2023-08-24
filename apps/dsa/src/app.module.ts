import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { WebhookModule } from "./webhook/webhook.module";
import { AttributeModule } from "./attribute/attribute.module";
import { AttributeClassModule } from "./attributeClass/attributeClass.module";
import { PersonModule } from "./person/person.module";
import { ResponseModule } from "./response/response.module";
import { ResponseNoteModule } from "./responseNote/responseNote.module";
import { TagModule } from "./tag/tag.module";
import { TagsOnResponseModule } from "./tagsOnResponse/tagsOnResponse.module";
import { DisplayModule } from "./display/display.module";
import { SurveyTriggerModule } from "./surveyTrigger/surveyTrigger.module";
import { SurveyAttributeFilterModule } from "./surveyAttributeFilter/surveyAttributeFilter.module";
import { SurveyModule } from "./survey/survey.module";
import { EventModule } from "./event/event.module";
import { EventClassModule } from "./eventClass/eventClass.module";
import { SessionModule } from "./session/session.module";
import { EnvironmentModule } from "./environment/environment.module";
import { ProductModule } from "./product/product.module";
import { TeamModule } from "./team/team.module";
import { MembershipModule } from "./membership/membership.module";
import { InviteModule } from "./invite/invite.module";
import { ApiKeyModule } from "./apiKey/apiKey.module";
import { AccountModule } from "./account/account.module";
import { UserModule } from "./user/user.module";
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
    WebhookModule,
    AttributeModule,
    AttributeClassModule,
    PersonModule,
    ResponseModule,
    ResponseNoteModule,
    TagModule,
    TagsOnResponseModule,
    DisplayModule,
    SurveyTriggerModule,
    SurveyAttributeFilterModule,
    SurveyModule,
    EventModule,
    EventClassModule,
    SessionModule,
    EnvironmentModule,
    ProductModule,
    TeamModule,
    MembershipModule,
    InviteModule,
    ApiKeyModule,
    AccountModule,
    UserModule,
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
