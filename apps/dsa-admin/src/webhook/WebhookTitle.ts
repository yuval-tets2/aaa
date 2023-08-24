import { Webhook as TWebhook } from "../api/webhook/Webhook";

export const WEBHOOK_TITLE_FIELD = "name";

export const WebhookTitle = (record: TWebhook): string => {
  return record.name || String(record.id);
};
