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
import { SEMESTER_TITLE_FIELD } from "../semester/SemesterTitle";

export const CourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Courses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <TextField label="Color" source="color" />
        <TextField label="Id" source="id" />
        <BooleanField label="Locked" source="locked" />
        <BooleanField label="Prereq Overriden" source="prereqOverriden" />
        <ReferenceField
          label="Semester"
          source="semester.id"
          reference="Semester"
        >
          <TextField source={SEMESTER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
