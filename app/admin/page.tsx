import { getFileContent } from '@/lib/storage/blob';
import { ConfigField } from './config-field';
import { TriggerRedeployButton } from './trigger-redeploy-button';

export default async function AdminPage() {
  const config = await getFileContent('config.json');
  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-4xl space-y-4">
        <h1 className="mb-6 text-3xl font-bold text-foreground">
          Admin Dashboard
        </h1>
        <div className="rounded-lg border border-border bg-card p-6 shadow">
          <div className="space-y-4">
            <ConfigField config={config ?? ''} />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 shadow">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-foreground">
                Deploy Changes
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                After saving your configuration, deploy the changes to make them
                live
              </p>
            </div>

            <div className="my-4 w-full border-t border-border" />

            <TriggerRedeployButton />
          </div>
        </div>
      </div>
    </div>
  );
}
