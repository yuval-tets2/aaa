import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EnvironmentTitle } from "../environment/EnvironmentTitle";
import { TagsOnResponseTitle } from "../tagsOnResponse/TagsOnResponseTitle";

export const TagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="environment.id"
          reference="Environment"
          label="Environment"
        >
          <SelectInput optionText={EnvironmentTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="responses"
          reference="TagsOnResponse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagsOnResponseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
