import Link from 'next/link';

export type DeepLinkProps = {
  value?: string | false;
  href?: string;
};

export const DeepLink = ({ value, href }: DeepLinkProps) => {
  return (
    <div className="flex flex-col items-start overflow-hidden">
      {href && value ? (
        <Link
          href={href}
          className="text-sm font-semibold text-primary hover:text-primary/60"
        >
          {value}
        </Link>
      ) : (
        <span className="text-sm">{value || '-'}</span>
      )}
    </div>
  );
};
