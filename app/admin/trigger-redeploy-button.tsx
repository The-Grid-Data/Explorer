'use client';

import { Button } from '@/components/ui/button';
import { triggerRedeploy } from './update-config';
import { useToast } from '@/hooks/use-toast';

export function TriggerRedeployButton() {
  const { toast } = useToast();

  const handleRedeploy = async () => {
    try {
      await triggerRedeploy();
      toast({
        title: 'Success',
        description: 'Redeploy triggered successfully'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to trigger redeploy',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <Button onClick={handleRedeploy}>Trigger Redeploy</Button>

      <div className="text-center text-sm text-muted-foreground">
        <p className="mb-2">
          To enable redeployment functionality, you need to set up a deploy
          hook.
        </p>
        <p>
          Please follow the instructions at{' '}
          <a
            href="https://vercel.com/guides/set-up-and-use-deploy-hooks-with-vercel-and-headless-cms#creating-a-deploy-hook"
            className="text-primary underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel&apos;s Deploy Hooks Guide
          </a>{' '}
          and add the hook URL as{' '}
          <code className="rounded bg-muted px-1 py-0.5">
            TRIGGER_REDEPLOY_HOOK_URL
          </code>{' '}
          in your Vercel environment variables.
        </p>
      </div>
    </div>
  );
}
