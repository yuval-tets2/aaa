import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ApiKeyTitle } from "../apiKey/ApiKeyTitle";
import { AttributeClassTitle } from "../attributeClass/AttributeClassTitle";
import { EventClassTitle } from "../eventClass/EventClassTitle";
import { PersonTitle } from "../person/PersonTitle";
import { ProductTitle } from "../product/ProductTitle";
import { SurveyTitle } from "../survey/SurveyTitle";
import { TagTitle } from "../tag/TagTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";

export const EnvironmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="apiKeys"
          reference="ApiKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiKeyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="attributeClasses"
          reference="AttributeClass"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttributeClassTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="eventClasses"
          reference="EventClass"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventClassTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="people"
          reference="Person"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="surveys"
          reference="Survey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tags"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "production", value: "production" },
            { label: "development", value: "development" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="webhooks"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Widget Setup Completed"
          source="widgetSetupCompleted"
        />
      </SimpleForm>
    </Edit>
  );
};
