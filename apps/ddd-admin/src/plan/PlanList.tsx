import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEGREEREQUIREMENT_TITLE_FIELD } from "../degreeRequirement/DegreeRequirementTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PlanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Plans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Semester" source="endSemester" />
        <TextField label="End Year" source="endYear" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Requirements"
          source="degreerequirement.id"
          reference="DegreeRequirement"
        >
          <TextField source={DEGREEREQUIREMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Semester" source="startSemester" />
        <TextField label="Start Year" source="startYear" />
        <TextField label="Transfer Credits" source="transferCredits" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
