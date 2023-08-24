import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ENVIRONMENT_TITLE_FIELD } from "./EnvironmentTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const EnvironmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField
          label="Widget Setup Completed"
          source="widgetSetupCompleted"
        />
        <ReferenceManyField
          reference="ApiKey"
          target="environmentId"
          label="ApiKeys"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Hashed Key" source="hashedKey" />
            <TextField label="Id" source="id" />
            <TextField label="Label" source="label" />
            <TextField label="Last Used At" source="lastUsedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AttributeClass"
          target="environmentId"
          label="AttributeClasses"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Archived" source="archived" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EventClass"
          target="environmentId"
          label="EventClasses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="No Code Config" source="noCodeConfig" />
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Person"
          target="environmentId"
          label="People"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Survey"
          target="environmentId"
          label="Surveys"
        >
          <Datagrid rowClick="show">
            <TextField label="Auto Close" source="autoClose" />
            <TextField label="Auto Complete" source="autoComplete" />
            <TextField label="Close On Date" source="closeOnDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Delay" source="delay" />
            <TextField label="Display Option" source="displayOption" />
            <ReferenceField
              label="Environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Questions" source="questions" />
            <TextField label="Recontact Days" source="recontactDays" />
            <TextField label="Redirect Url" source="redirectUrl" />
            <TextField label="Status" source="status" />
            <TextField
              label="Survey Closed Message"
              source="surveyClosedMessage"
            />
            <TextField label="Thank You Card" source="thankYouCard" />
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Tag" target="environmentId" label="Tags">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Webhook"
          target="environmentId"
          label="Webhooks"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Survey Ids" source="surveyIds" />
            <TextField label="Triggers" source="triggers" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
