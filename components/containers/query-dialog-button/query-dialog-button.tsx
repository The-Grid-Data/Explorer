import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
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
      <DialogContent className="w-[90%] rounded-md md:w-full md:p-4 lg:min-w-64">
        <DialogHeader>
          <DialogTitle>View query</DialogTitle>
          <DialogDescription>
            You can copy and paste this query at this Graphql playground.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <CodeSection title="Query" content={queryDocument} />
          {variables && (
            <CodeSection
              title="Variables"
              content={JSON.stringify(variables, null, 2)}
            />
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

export const CodeSection = ({
  content,
  title
}: {
  content: string;
  title: string;
}) => {
  return (
    <div className="flex w-full flex-1 flex-col gap-2">
      <h3 className="flex-1 text-sm font-semibold">{title}</h3>
      <Separator />
      <ScrollArea className="h-fit max-h-[200px] min-w-[100%] overflow-auto bg-primary/5">
        <pre className="text whitespace-wrap w-full text-wrap p-4 text-xs">
          {content}
        </pre>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
