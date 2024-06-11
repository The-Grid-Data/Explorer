import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { SiGraphql } from 'react-icons/si';
import { Separator } from '@/components/ui/separator';

export type QueryDialogProps = {
  queryDocument: string;
  variables?: Record<string, any>;
  buttonLabel: string;
};

const getPlaygroundUrl = (
  query: string,
  variables?: QueryDialogProps['variables']
): string => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL;
  const encodedQuery = encodeURIComponent(query);
  const encodedVariables = variables
    ? `&variables=${encodeURIComponent(JSON.stringify(variables, null, 2))}`
    : '';

  return `https://cloud.hasura.io/public/graphiql?endpoint=${endpoint}&query=${encodedQuery}${encodedVariables}`;
};
export const QueryDialogButton = ({
  queryDocument,
  variables
}: QueryDialogProps) => {
  const playgroundUrl = getPlaygroundUrl(queryDocument, variables);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="w-fit">
          <SiGraphql size={18} className="mr-2" />
          View Query
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[60%] rounded-md">
        <DialogHeader>
          <DialogTitle>View query</DialogTitle>
          <DialogDescription>
            You can copy and paste this query at this Graphql playground.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Query</h3>
            <Separator />
            <ScrollArea className="h-[200px]">
              <pre className="text overflow-x-auto bg-slate-50 text-xs">
                {queryDocument}
              </pre>
            </ScrollArea>
          </div>
          {variables && (
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">Variables</h3>
              <Separator />
              <ScrollArea className="h-[200px]">
                <pre className="text overflow-x-auto bg-slate-50 text-xs">
                  {JSON.stringify(variables, null, 2)}
                </pre>
              </ScrollArea>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button asChild>
            <Link target="_blank" href={playgroundUrl}>
              Open in playground
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
