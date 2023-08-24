import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";

export const SurveyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Surveys"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Auto Close" source="autoClose" />
        <TextField label="Auto Complete" source="autoComplete" />
        <TextField label="Close On Date" source="closeOnDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Delay" source="delay" />
        <TextField label="Display Option" source="displayOption" />
        <ReferenceField
          label="Environment"
          source="environment.id"
          reference="Environment"
        >
          <TextField source={ENVIRONMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Questions" source="questions" />
        <TextField label="Recontact Days" source="recontactDays" />
        <TextField label="Redirect Url" source="redirectUrl" />
        <TextField label="Status" source="status" />
        <TextField label="Survey Closed Message" source="surveyClosedMessage" />
        <TextField label="Thank You Card" source="thankYouCard" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
