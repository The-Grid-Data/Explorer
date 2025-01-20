export const Banner = () => {
  return (
    <section className="flex justify-center bg-foreground p-2">
      <span className="text-center text-sm font-light text-muted/70">
        YOU SHOULD NOT USE THIS AS A DAILY DRIVER. This is a reference
        implementation of{' '}
        <a
          target="_blank"
          href="https://thegrid.id/legal/web-services-terms"
          className="underline"
        >
          The Grid&apos;s data
        </a>{' '}
        which is in Beta - API users can pick and show data relevant to their
        users.
      </span>
    </section>
  );
};
