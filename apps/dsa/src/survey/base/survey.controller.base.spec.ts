import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SurveyController } from "../survey.controller";
import { SurveyService } from "../survey.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  autoClose: 42,
  autoComplete: 42,
  closeOnDate: new Date(),
  createdAt: new Date(),
  delay: 42,
  id: "exampleId",
  name: "exampleName",
  recontactDays: 42,
  redirectUrl: "exampleRedirectUrl",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  autoClose: 42,
  autoComplete: 42,
  closeOnDate: new Date(),
  createdAt: new Date(),
  delay: 42,
  id: "exampleId",
  name: "exampleName",
  recontactDays: 42,
  redirectUrl: "exampleRedirectUrl",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    autoClose: 42,
    autoComplete: 42,
    closeOnDate: new Date(),
    createdAt: new Date(),
    delay: 42,
    id: "exampleId",
    name: "exampleName",
    recontactDays: 42,
    redirectUrl: "exampleRedirectUrl",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  autoClose: 42,
  autoComplete: 42,
  closeOnDate: new Date(),
  createdAt: new Date(),
  delay: 42,
  id: "exampleId",
  name: "exampleName",
  recontactDays: 42,
  redirectUrl: "exampleRedirectUrl",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Survey", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SurveyService,
          useValue: service,
        },
      ],
      controllers: [SurveyController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /surveys", async () => {
    await request(app.getHttpServer())
      .post("/surveys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closeOnDate: CREATE_RESULT.closeOnDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /surveys", async () => {
    await request(app.getHttpServer())
      .get("/surveys")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          closeOnDate: FIND_MANY_RESULT[0].closeOnDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /surveys/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/surveys"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /surveys/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/surveys"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        closeOnDate: FIND_ONE_RESULT.closeOnDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /surveys existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/surveys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closeOnDate: CREATE_RESULT.closeOnDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/surveys")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
