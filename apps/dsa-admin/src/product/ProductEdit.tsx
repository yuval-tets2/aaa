import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { EnvironmentTitle } from "../environment/EnvironmentTitle";
import { TeamTitle } from "../team/TeamTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Brand Color" source="brandColor" />
        <BooleanInput label="Click Outside Close" source="clickOutsideClose" />
        <BooleanInput label="Dark Overlay" source="darkOverlay" />
        <ReferenceArrayInput
          source="environments"
          reference="Environment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EnvironmentTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Formbricks Signature"
          source="formbricksSignature"
        />
        <TextInput
          label="Highlight Border Color"
          source="highlightBorderColor"
        />
        <TextInput label="Name" source="name" />
        <SelectInput
          source="placement"
          label="Placement"
          choices={[
            { label: "bottomLeft", value: "bottomLeft" },
            { label: "bottomRight", value: "bottomRight" },
            { label: "topLeft", value: "topLeft" },
            { label: "topRight", value: "topRight" },
            { label: "center", value: "center" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Recontact Days" source="recontactDays" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
