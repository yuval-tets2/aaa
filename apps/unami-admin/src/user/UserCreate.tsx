import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ReportTitle } from "../report/ReportTitle";
import { TeamUserTitle } from "../teamUser/TeamUserTitle";
import { WebsiteTitle } from "../website/WebsiteTitle";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceArrayInput
          source="report"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <TextInput label="Role" source="role" />
        <ReferenceArrayInput
          source="teamUser"
          reference="TeamUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamUserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="website"
          reference="Website"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebsiteTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
