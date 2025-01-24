'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { updateConfig } from './update-config';
import { useState, useEffect } from 'react';
import { configSchema } from '@/lib/config/config.schema';
import { toast } from '@/hooks/use-toast';
import defaultConfig from '@/lib/config/default-config.json';

export function ConfigField({ config }: { config: string }) {
  const [jsonValue, setJsonValue] = useState(config);
  const [isSaving, setIsSaving] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const formatJson = (json: string) => {
    try {
      const parsed = JSON.parse(json);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return json;
    }
  };

  useEffect(() => {
    try {
      setJsonValue(formatJson(config));
    } catch {
      setJsonValue(config);
    }
  }, [config]);

  const validateJson = (value: string) => {
    try {
      const parsedJson = JSON.parse(value);
      configSchema.parse(parsedJson);
      setValidationError(null);
      return true;
    } catch (error) {
      setValidationError(
        error instanceof Error ? error.message : 'Invalid JSON format'
      );
      return false;
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);

    try {
      const parsedJson = JSON.parse(jsonValue);
      configSchema.parse(parsedJson);
      await updateConfig(parsedJson);
      toast({
        variant: 'default',
        title: 'Success',
        description:
          'Configuration saved successfully. Please trigger redeploy for changes to take effect'
      });
    } catch {
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'Invalid configuration format. Please check your JSON syntax and schema.'
      });
    } finally {
      setIsSaving(false);
    }
  }

  const handleChange = (value: string) => {
    setJsonValue(value);
    validateJson(value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label htmlFor="jsonString">Site Configuration</label>
      <Textarea
        required
        placeholder="Paste your JSON here..."
        className="min-h-[600px] w-full font-mono"
        value={jsonValue}
        onChange={e => handleChange(e.target.value)}
      />

      {validationError && (
        <div className="text-sm text-red-500">{validationError}</div>
      )}

      <div className="flex justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            const defaultValue = formatJson(JSON.stringify(defaultConfig));
            setJsonValue(defaultValue);
            validateJson(defaultValue);
          }}
        >
          Restore to default config
        </Button>
        <Button type="submit" disabled={isSaving} className="px-12">
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  );
}
