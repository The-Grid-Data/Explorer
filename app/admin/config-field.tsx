'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { uploadJson } from './upload-config.action';
import { useTransition } from 'react';
import { useState } from 'react';
import { configSchema } from '@/lib/config/config.schema';

export function ConfigField({ config }: { config: string }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [jsonValue, setJsonValue] = useState(config);

  const onSubmit = async (formData: FormData) => {
    setError(null);
    try {
      const parsedJson = JSON.parse(jsonValue);
      const parsed = configSchema.parse(parsedJson);

      startTransition(async () => {
        await uploadJson(parsed);
      });
    } catch (error) {
      setError(
        'Invalid configuration format. Please check your JSON syntax and schema.'
      );
      return;
    }
  };

  return (
    <form action={onSubmit} className="space-y-4">
      <label htmlFor="jsonString">JSON String</label>
      <Textarea
        id="jsonString"
        name="jsonString"
        required
        placeholder="Paste your JSON here..."
        className="min-h-[200px]"
        value={jsonValue}
        onChange={e => setJsonValue(e.target.value)}
      />
      {error && <div className="text-sm text-red-500">{error}</div>}
      <Button type="submit">{isPending ? 'Saving...' : 'Save'}</Button>
    </form>
  );
}
