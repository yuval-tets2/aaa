import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PersonTitle } from "../person/PersonTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const DisplayCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "seen", value: "seen" },
            { label: "responded", value: "responded" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="survey.id" reference="Survey" label="Survey">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
