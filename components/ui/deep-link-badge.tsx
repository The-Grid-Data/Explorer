import Link from 'next/link';
import { ReactNode } from 'react';
import { Badge } from './badge';

export type DeepLinkProps = {
  value?: string | false;
  href?: string;
  icon?: ReactNode;
};

export const DeepLinkBadge = ({ value, href, icon }: DeepLinkProps) => {
  return (
    <div className="flex flex-col items-start overflow-hidden">
      {href && value ? (
        <Link
          href={href}
          scroll={false}
          className="text-sm font-semibold text-primary hover:text-primary/60"
        >
          <Badge variant="secondary" className="flex w-fit items-center gap-2">
            {icon} {value}
          </Badge>
        </Link>
      ) : (
        '-'
      )}
    </div>
  );
};
