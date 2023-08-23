import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";

export const DegreeRequirementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DegreeRequirements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bypasses" source="bypasses" />
        <TextField label="Id" source="id" />
        <TextField label="Major" source="major" />
        <ReferenceField label="Plan" source="plan.id" reference="Plan">
          <TextField source={PLAN_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
