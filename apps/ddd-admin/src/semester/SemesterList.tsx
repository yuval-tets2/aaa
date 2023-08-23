import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";

export const SemesterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Semesters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Color" source="color" />
        <TextField label="Id" source="id" />
        <BooleanField label="Locked" source="locked" />
        <ReferenceField label="Plan" source="plan.id" reference="Plan">
          <TextField source={PLAN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Semester" source="semester" />
        <TextField label="Year" source="year" />
      </Datagrid>
    </List>
  );
};
