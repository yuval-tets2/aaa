import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WebhookList } from "./webhook/WebhookList";
import { WebhookCreate } from "./webhook/WebhookCreate";
import { WebhookEdit } from "./webhook/WebhookEdit";
import { WebhookShow } from "./webhook/WebhookShow";
import { AttributeList } from "./attribute/AttributeList";
import { AttributeCreate } from "./attribute/AttributeCreate";
import { AttributeEdit } from "./attribute/AttributeEdit";
import { AttributeShow } from "./attribute/AttributeShow";
import { AttributeClassList } from "./attributeClass/AttributeClassList";
import { AttributeClassCreate } from "./attributeClass/AttributeClassCreate";
import { AttributeClassEdit } from "./attributeClass/AttributeClassEdit";
import { AttributeClassShow } from "./attributeClass/AttributeClassShow";
import { PersonList } from "./person/PersonList";
import { PersonCreate } from "./person/PersonCreate";
import { PersonEdit } from "./person/PersonEdit";
import { PersonShow } from "./person/PersonShow";
import { ResponseList } from "./response/ResponseList";
import { ResponseCreate } from "./response/ResponseCreate";
import { ResponseEdit } from "./response/ResponseEdit";
import { ResponseShow } from "./response/ResponseShow";
import { ResponseNoteList } from "./responseNote/ResponseNoteList";
import { ResponseNoteCreate } from "./responseNote/ResponseNoteCreate";
import { ResponseNoteEdit } from "./responseNote/ResponseNoteEdit";
import { ResponseNoteShow } from "./responseNote/ResponseNoteShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { TagsOnResponseList } from "./tagsOnResponse/TagsOnResponseList";
import { TagsOnResponseCreate } from "./tagsOnResponse/TagsOnResponseCreate";
import { TagsOnResponseEdit } from "./tagsOnResponse/TagsOnResponseEdit";
import { TagsOnResponseShow } from "./tagsOnResponse/TagsOnResponseShow";
import { DisplayList } from "./display/DisplayList";
import { DisplayCreate } from "./display/DisplayCreate";
import { DisplayEdit } from "./display/DisplayEdit";
import { DisplayShow } from "./display/DisplayShow";
import { SurveyTriggerList } from "./surveyTrigger/SurveyTriggerList";
import { SurveyTriggerCreate } from "./surveyTrigger/SurveyTriggerCreate";
import { SurveyTriggerEdit } from "./surveyTrigger/SurveyTriggerEdit";
import { SurveyTriggerShow } from "./surveyTrigger/SurveyTriggerShow";
import { SurveyAttributeFilterList } from "./surveyAttributeFilter/SurveyAttributeFilterList";
import { SurveyAttributeFilterCreate } from "./surveyAttributeFilter/SurveyAttributeFilterCreate";
import { SurveyAttributeFilterEdit } from "./surveyAttributeFilter/SurveyAttributeFilterEdit";
import { SurveyAttributeFilterShow } from "./surveyAttributeFilter/SurveyAttributeFilterShow";
import { SurveyList } from "./survey/SurveyList";
import { SurveyCreate } from "./survey/SurveyCreate";
import { SurveyEdit } from "./survey/SurveyEdit";
import { SurveyShow } from "./survey/SurveyShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { EventClassList } from "./eventClass/EventClassList";
import { EventClassCreate } from "./eventClass/EventClassCreate";
import { EventClassEdit } from "./eventClass/EventClassEdit";
import { EventClassShow } from "./eventClass/EventClassShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { EnvironmentList } from "./environment/EnvironmentList";
import { EnvironmentCreate } from "./environment/EnvironmentCreate";
import { EnvironmentEdit } from "./environment/EnvironmentEdit";
import { EnvironmentShow } from "./environment/EnvironmentShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { MembershipList } from "./membership/MembershipList";
import { MembershipCreate } from "./membership/MembershipCreate";
import { MembershipEdit } from "./membership/MembershipEdit";
import { MembershipShow } from "./membership/MembershipShow";
import { InviteList } from "./invite/InviteList";
import { InviteCreate } from "./invite/InviteCreate";
import { InviteEdit } from "./invite/InviteEdit";
import { InviteShow } from "./invite/InviteShow";
import { ApiKeyList } from "./apiKey/ApiKeyList";
import { ApiKeyCreate } from "./apiKey/ApiKeyCreate";
import { ApiKeyEdit } from "./apiKey/ApiKeyEdit";
import { ApiKeyShow } from "./apiKey/ApiKeyShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"dsa"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Webhook"
          list={WebhookList}
          edit={WebhookEdit}
          create={WebhookCreate}
          show={WebhookShow}
        />
        <Resource
          name="Attribute"
          list={AttributeList}
          edit={AttributeEdit}
          create={AttributeCreate}
          show={AttributeShow}
        />
        <Resource
          name="AttributeClass"
          list={AttributeClassList}
          edit={AttributeClassEdit}
          create={AttributeClassCreate}
          show={AttributeClassShow}
        />
        <Resource
          name="Person"
          list={PersonList}
          edit={PersonEdit}
          create={PersonCreate}
          show={PersonShow}
        />
        <Resource
          name="Response"
          list={ResponseList}
          edit={ResponseEdit}
          create={ResponseCreate}
          show={ResponseShow}
        />
        <Resource
          name="ResponseNote"
          list={ResponseNoteList}
          edit={ResponseNoteEdit}
          create={ResponseNoteCreate}
          show={ResponseNoteShow}
        />
        <Resource
          name="Tag"
          list={TagList}
          edit={TagEdit}
          create={TagCreate}
          show={TagShow}
        />
        <Resource
          name="TagsOnResponse"
          list={TagsOnResponseList}
          edit={TagsOnResponseEdit}
          create={TagsOnResponseCreate}
          show={TagsOnResponseShow}
        />
        <Resource
          name="Display"
          list={DisplayList}
          edit={DisplayEdit}
          create={DisplayCreate}
          show={DisplayShow}
        />
        <Resource
          name="SurveyTrigger"
          list={SurveyTriggerList}
          edit={SurveyTriggerEdit}
          create={SurveyTriggerCreate}
          show={SurveyTriggerShow}
        />
        <Resource
          name="SurveyAttributeFilter"
          list={SurveyAttributeFilterList}
          edit={SurveyAttributeFilterEdit}
          create={SurveyAttributeFilterCreate}
          show={SurveyAttributeFilterShow}
        />
        <Resource
          name="Survey"
          list={SurveyList}
          edit={SurveyEdit}
          create={SurveyCreate}
          show={SurveyShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="EventClass"
          list={EventClassList}
          edit={EventClassEdit}
          create={EventClassCreate}
          show={EventClassShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Environment"
          list={EnvironmentList}
          edit={EnvironmentEdit}
          create={EnvironmentCreate}
          show={EnvironmentShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Membership"
          list={MembershipList}
          edit={MembershipEdit}
          create={MembershipCreate}
          show={MembershipShow}
        />
        <Resource
          name="Invite"
          list={InviteList}
          edit={InviteEdit}
          create={InviteCreate}
          show={InviteShow}
        />
        <Resource
          name="ApiKey"
          list={ApiKeyList}
          edit={ApiKeyEdit}
          create={ApiKeyCreate}
          show={ApiKeyShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
