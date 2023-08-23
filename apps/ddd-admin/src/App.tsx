import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TemplateDatumList } from "./templateDatum/TemplateDatumList";
import { TemplateDatumCreate } from "./templateDatum/TemplateDatumCreate";
import { TemplateDatumEdit } from "./templateDatum/TemplateDatumEdit";
import { TemplateDatumShow } from "./templateDatum/TemplateDatumShow";
import { TemplateItemList } from "./templateItem/TemplateItemList";
import { TemplateItemCreate } from "./templateItem/TemplateItemCreate";
import { TemplateItemEdit } from "./templateItem/TemplateItemEdit";
import { TemplateItemShow } from "./templateItem/TemplateItemShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { PlanList } from "./plan/PlanList";
import { PlanCreate } from "./plan/PlanCreate";
import { PlanEdit } from "./plan/PlanEdit";
import { PlanShow } from "./plan/PlanShow";
import { DegreeRequirementList } from "./degreeRequirement/DegreeRequirementList";
import { DegreeRequirementCreate } from "./degreeRequirement/DegreeRequirementCreate";
import { DegreeRequirementEdit } from "./degreeRequirement/DegreeRequirementEdit";
import { DegreeRequirementShow } from "./degreeRequirement/DegreeRequirementShow";
import { BypassList } from "./bypass/BypassList";
import { BypassCreate } from "./bypass/BypassCreate";
import { BypassEdit } from "./bypass/BypassEdit";
import { BypassShow } from "./bypass/BypassShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { SemesterList } from "./semester/SemesterList";
import { SemesterCreate } from "./semester/SemesterCreate";
import { SemesterEdit } from "./semester/SemesterEdit";
import { SemesterShow } from "./semester/SemesterShow";
import { AcademicDetailList } from "./academicDetail/AcademicDetailList";
import { AcademicDetailCreate } from "./academicDetail/AcademicDetailCreate";
import { AcademicDetailEdit } from "./academicDetail/AcademicDetailEdit";
import { AcademicDetailShow } from "./academicDetail/AcademicDetailShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { VerificationTokenList } from "./verificationToken/VerificationTokenList";
import { VerificationTokenCreate } from "./verificationToken/VerificationTokenCreate";
import { VerificationTokenEdit } from "./verificationToken/VerificationTokenEdit";
import { VerificationTokenShow } from "./verificationToken/VerificationTokenShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ddd"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TemplateDatum"
          list={TemplateDatumList}
          edit={TemplateDatumEdit}
          create={TemplateDatumCreate}
          show={TemplateDatumShow}
        />
        <Resource
          name="TemplateItem"
          list={TemplateItemList}
          edit={TemplateItemEdit}
          create={TemplateItemCreate}
          show={TemplateItemShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Plan"
          list={PlanList}
          edit={PlanEdit}
          create={PlanCreate}
          show={PlanShow}
        />
        <Resource
          name="DegreeRequirement"
          list={DegreeRequirementList}
          edit={DegreeRequirementEdit}
          create={DegreeRequirementCreate}
          show={DegreeRequirementShow}
        />
        <Resource
          name="Bypass"
          list={BypassList}
          edit={BypassEdit}
          create={BypassCreate}
          show={BypassShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Semester"
          list={SemesterList}
          edit={SemesterEdit}
          create={SemesterCreate}
          show={SemesterShow}
        />
        <Resource
          name="AcademicDetail"
          list={AcademicDetailList}
          edit={AcademicDetailEdit}
          create={AcademicDetailCreate}
          show={AcademicDetailShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="VerificationToken"
          list={VerificationTokenList}
          edit={VerificationTokenEdit}
          create={VerificationTokenCreate}
          show={VerificationTokenShow}
        />
      </Admin>
    </div>
  );
};

export default App;
