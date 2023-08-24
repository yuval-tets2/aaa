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
import { SessionDatumController } from "../sessionDatum.controller";
import { SessionDatumService } from "../sessionDatum.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dataType: 42,
  dateValue: new Date(),
  eventKey: "exampleEventKey",
  id: "exampleId",
  numberValue: 42.42,
  stringValue: "exampleStringValue",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dataType: 42,
  dateValue: new Date(),
  eventKey: "exampleEventKey",
  id: "exampleId",
  numberValue: 42.42,
  stringValue: "exampleStringValue",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dataType: 42,
    dateValue: new Date(),
    eventKey: "exampleEventKey",
    id: "exampleId",
    numberValue: 42.42,
    stringValue: "exampleStringValue",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dataType: 42,
  dateValue: new Date(),
  eventKey: "exampleEventKey",
  id: "exampleId",
  numberValue: 42.42,
  stringValue: "exampleStringValue",
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

describe("SessionDatum", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SessionDatumService,
          useValue: service,
        },
      ],
      controllers: [SessionDatumController],
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

  test("POST /sessionData", async () => {
    await request(app.getHttpServer())
      .post("/sessionData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateValue: CREATE_RESULT.dateValue.toISOString(),
      });
  });

  test("GET /sessionData", async () => {
    await request(app.getHttpServer())
      .get("/sessionData")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateValue: FIND_MANY_RESULT[0].dateValue.toISOString(),
        },
      ]);
  });

  test("GET /sessionData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/sessionData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /sessionData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/sessionData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateValue: FIND_ONE_RESULT.dateValue.toISOString(),
      });
  });

  test("POST /sessionData existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/sessionData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateValue: CREATE_RESULT.dateValue.toISOString(),
      })
      .then(function () {
        agent
          .post("/sessionData")
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
