import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { WebsiteList } from "./website/WebsiteList";
import { WebsiteCreate } from "./website/WebsiteCreate";
import { WebsiteEdit } from "./website/WebsiteEdit";
import { WebsiteShow } from "./website/WebsiteShow";
import { WebsiteEventList } from "./websiteEvent/WebsiteEventList";
import { WebsiteEventCreate } from "./websiteEvent/WebsiteEventCreate";
import { WebsiteEventEdit } from "./websiteEvent/WebsiteEventEdit";
import { WebsiteEventShow } from "./websiteEvent/WebsiteEventShow";
import { EventDatumList } from "./eventDatum/EventDatumList";
import { EventDatumCreate } from "./eventDatum/EventDatumCreate";
import { EventDatumEdit } from "./eventDatum/EventDatumEdit";
import { EventDatumShow } from "./eventDatum/EventDatumShow";
import { SessionDatumList } from "./sessionDatum/SessionDatumList";
import { SessionDatumCreate } from "./sessionDatum/SessionDatumCreate";
import { SessionDatumEdit } from "./sessionDatum/SessionDatumEdit";
import { SessionDatumShow } from "./sessionDatum/SessionDatumShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { TeamUserList } from "./teamUser/TeamUserList";
import { TeamUserCreate } from "./teamUser/TeamUserCreate";
import { TeamUserEdit } from "./teamUser/TeamUserEdit";
import { TeamUserShow } from "./teamUser/TeamUserShow";
import { TeamWebsiteList } from "./teamWebsite/TeamWebsiteList";
import { TeamWebsiteCreate } from "./teamWebsite/TeamWebsiteCreate";
import { TeamWebsiteEdit } from "./teamWebsite/TeamWebsiteEdit";
import { TeamWebsiteShow } from "./teamWebsite/TeamWebsiteShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
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
        title={"unami"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Website"
          list={WebsiteList}
          edit={WebsiteEdit}
          create={WebsiteCreate}
          show={WebsiteShow}
        />
        <Resource
          name="WebsiteEvent"
          list={WebsiteEventList}
          edit={WebsiteEventEdit}
          create={WebsiteEventCreate}
          show={WebsiteEventShow}
        />
        <Resource
          name="EventDatum"
          list={EventDatumList}
          edit={EventDatumEdit}
          create={EventDatumCreate}
          show={EventDatumShow}
        />
        <Resource
          name="SessionDatum"
          list={SessionDatumList}
          edit={SessionDatumEdit}
          create={SessionDatumCreate}
          show={SessionDatumShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="TeamUser"
          list={TeamUserList}
          edit={TeamUserEdit}
          create={TeamUserCreate}
          show={TeamUserShow}
        />
        <Resource
          name="TeamWebsite"
          list={TeamWebsiteList}
          edit={TeamWebsiteEdit}
          create={TeamWebsiteCreate}
          show={TeamWebsiteShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
