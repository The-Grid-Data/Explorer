import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { TgsField } from './fields/tgs-field';

const FormSchema = z.object({
  'products.name': z.string().optional(),
  'products.productType': z.string().optional(),
  'products.description': z.string().optional(),
  'products.productStatus': z.string().optional(),
  'products.isMainProduct': z.string().optional(),
  'products.launchDate': z.string().optional(),
  'products.supportsProducts': z.string().optional(),
  'urls.url': z.string().optional()
});

type ProductFormProps = {
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
};

export function ProductForm({ onSubmit }: ProductFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      'products.name': 'asdf',
      'products.productType': '',
      'products.description': '',
      'products.productStatus': '',
      'products.isMainProduct': '',
      'products.launchDate': '',
      'products.supportsProducts': '',
      'urls.url': ''
    }
  });

  function onError(errors: any) {
    console.error('Form validation failed:', errors);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="w-2/3 space-y-6 p-20"
      >
        <TgsField
          label="Product Name"
          placeholder="Enter product name..."
          tgsField="products.name"
        />
        <TgsField
          label="Product Type"
          placeholder="Select product type..."
          tgsField="products.productType"
        />
        <TgsField
          label="Product Description"
          placeholder="Enter product description..."
          tgsField="products.description"
        />
        <TgsField
          label="Product Status"
          placeholder="Select product status..."
          tgsField="products.productStatus"
        />
        <TgsField
          label="Is Main Product"
          placeholder="Select if main product..."
          tgsField="products.isMainProduct"
        />
        <TgsField
          label="Launch Date"
          placeholder="Enter launch date..."
          tgsField="products.launchDate"
        />
        <TgsField
          label="Supports Products"
          placeholder="Enter supported products..."
          tgsField="products.supportsProducts"
        />
        <TgsField label="URL" placeholder="Enter URL..." tgsField="urls.url" />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
