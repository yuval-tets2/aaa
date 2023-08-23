import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { TemplateDatumModule } from "./templateDatum/templateDatum.module";
import { TemplateItemModule } from "./templateItem/templateItem.module";
import { TemplateModule } from "./template/template.module";
import { ProfileModule } from "./profile/profile.module";
import { PlanModule } from "./plan/plan.module";
import { DegreeRequirementModule } from "./degreeRequirement/degreeRequirement.module";
import { BypassModule } from "./bypass/bypass.module";
import { CourseModule } from "./course/course.module";
import { SemesterModule } from "./semester/semester.module";
import { AcademicDetailModule } from "./academicDetail/academicDetail.module";
import { AccountModule } from "./account/account.module";
import { SessionModule } from "./session/session.module";
import { UserModule } from "./user/user.module";
import { VerificationTokenModule } from "./verificationToken/verificationToken.module";
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
    TemplateDatumModule,
    TemplateItemModule,
    TemplateModule,
    ProfileModule,
    PlanModule,
    DegreeRequirementModule,
    BypassModule,
    CourseModule,
    SemesterModule,
    AcademicDetailModule,
    AccountModule,
    SessionModule,
    UserModule,
    VerificationTokenModule,
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
