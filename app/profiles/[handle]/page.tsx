export const dynamic = 'force-dynamic';

export type PageProps<P = {}> = {
  params: P;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Profile({
  params
}: PageProps<{ handle: string }>) {
  console.log(params);

  return (
    <div className="md:container">
      <div className="h-10" />
      <pre>{JSON.stringify(params)}</pre>
    </div>
  );
}
