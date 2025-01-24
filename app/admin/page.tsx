import { getFileContent } from '@/lib/storage/blob';
import { ConfigField } from './config-field';

export default async function AdminPage() {
  const config = await getFileContent('config.json');
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="space-y-4">
            <ConfigField config={config ?? ''} />
          </div>
        </div>
      </div>
    </div>
  );
}
