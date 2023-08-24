import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { SurveyAttributeFilterTitle } from "../surveyAttributeFilter/SurveyAttributeFilterTitle";
import { DisplayTitle } from "../display/DisplayTitle";
import { EnvironmentTitle } from "../environment/EnvironmentTitle";
import { ResponseTitle } from "../response/ResponseTitle";
import { SurveyTriggerTitle } from "../surveyTrigger/SurveyTriggerTitle";

export const SurveyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attributeFilters"
          reference="SurveyAttributeFilter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyAttributeFilterTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Auto Close" source="autoClose" />
        <NumberInput step={1} label="Auto Complete" source="autoComplete" />
        <DateTimeInput label="Close On Date" source="closeOnDate" />
        <NumberInput step={1} label="Delay" source="delay" />
        <SelectInput
          source="displayOption"
          label="Display Option"
          choices={[
            { label: "displayOnce", value: "displayOnce" },
            { label: "displayMultiple", value: "displayMultiple" },
            { label: "respondMultiple", value: "respondMultiple" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="displays"
          reference="Display"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DisplayTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="environment.id"
          reference="Environment"
          label="Environment"
        >
          <SelectInput optionText={EnvironmentTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <div />
        <NumberInput step={1} label="Recontact Days" source="recontactDays" />
        <TextInput label="Redirect Url" source="redirectUrl" />
        <ReferenceArrayInput
          source="responses"
          reference="Response"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResponseTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "draft", value: "draft" },
            { label: "inProgress", value: "inProgress" },
            { label: "paused", value: "paused" },
            { label: "completed", value: "completed" },
            { label: "archived", value: "archived" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <div />
        <div />
        <ReferenceArrayInput
          source="triggers"
          reference="SurveyTrigger"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyTriggerTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "email", value: "email" },
            { label: "link", value: "link" },
            { label: "mobile", value: "mobile" },
            { label: "web", value: "web" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
