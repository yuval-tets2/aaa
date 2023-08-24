import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EVENTCLASS_TITLE_FIELD } from "../eventClass/EventClassTitle";
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";

export const SurveyTriggerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SurveyTriggers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Event Class"
          source="eventclass.id"
          reference="EventClass"
        >
          <TextField source={EVENTCLASS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <ReferenceField label="Survey" source="survey.id" reference="Survey">
          <TextField source={SURVEY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
