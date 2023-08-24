import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TeamUserTitle } from "../teamUser/TeamUserTitle";
import { TeamWebsiteTitle } from "../teamWebsite/TeamWebsiteTitle";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Access Code" source="accessCode" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="teamUser"
          reference="TeamUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamUserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="teamWebsite"
          reference="TeamWebsite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamWebsiteTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
