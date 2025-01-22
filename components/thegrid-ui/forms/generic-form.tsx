'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { TgsField } from './fields/tgs-field';

const FormSchema = z.any();

export function GenericForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      'profileInfos.name': 'test'
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

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
          label="Name"
          placeholder="Enter name..."
          tgsField="profileInfos.name"
        />
        <TgsField
          label="Profile Type"
          placeholder="Select profile type..."
          tgsField="profileInfos.profileType"
        />
        <TgsField
          label="Profile Sector"
          placeholder="Select profile sector..."
          tgsField="profileInfos.profileSector"
        />
        <TgsField
          label="Profile Status"
          placeholder="Select profile status..."
          tgsField="profileInfos.profileStatus"
        />
        <TgsField
          label="Founding Date"
          placeholder="Enter founding date..."
          tgsField="profileInfos.foundingDate"
        />
        <TgsField
          label="Logo"
          placeholder="Enter logo URL..."
          tgsField="profileInfos.logo"
        />
        <TgsField
          label="Short Description"
          placeholder="Enter short description..."
          tgsField="profileInfos.descriptionShort"
        />
        <TgsField
          label="Long Description"
          placeholder="Enter long description..."
          tgsField="profileInfos.descriptionLong"
        />
        <TgsField
          label="Tagline"
          placeholder="Enter tagline..."
          tgsField="profileInfos.tagLine"
        />
        <TgsField
          label="Asset Name"
          placeholder="Enter asset name..."
          tgsField="assets.name"
        />
        <TgsField
          label="Ticker"
          placeholder="Enter ticker..."
          tgsField="assets.ticker"
        />
        <TgsField
          label="Asset Icon"
          placeholder="Enter asset icon URL..."
          tgsField="assets.icon"
        />
        <TgsField
          label="Asset Short Description"
          placeholder="Enter asset short description..."
          tgsField="assets.shortDescription"
        />
        <TgsField
          label="Asset Types"
          placeholder="Select asset types..."
          tgsField="assets.assetTypes"
        />
        <TgsField
          label="Asset Address"
          placeholder="Enter asset address..."
          tgsField="assets.address"
        />
        <TgsField
          label="Asset Profile"
          placeholder="Enter asset profile..."
          tgsField="assets.profile"
        />
        <TgsField
          label="Asset Status"
          placeholder="Select asset status..."
          tgsField="assets.assetStatus"
        />
        <TgsField
          label="Asset Support Types"
          placeholder="Select asset support types..."
          tgsField="assets.assetSupportTypes"
        />
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
        <TgsField
          label="Entity Name"
          placeholder="Enter entity name..."
          tgsField="entities.name"
        />
        <TgsField
          label="Trade Name"
          placeholder="Enter trade name..."
          tgsField="entities.tradeName"
        />
        <TgsField
          label="Entity Types"
          placeholder="Select entity types..."
          tgsField="entities.entityTypes"
        />
        <TgsField
          label="Date of Incorporation"
          placeholder="Enter incorporation date..."
          tgsField="entities.dateOfIncorporation"
        />
        <TgsField
          label="Parent Entity"
          placeholder="Enter parent entity..."
          tgsField="entities.parentEntity"
        />
        <TgsField
          label="Local Registration Number"
          placeholder="Enter registration number..."
          tgsField="entities.localRegistrationNumber"
        />
        <TgsField
          label="Tax Identification Number"
          placeholder="Enter tax ID..."
          tgsField="entities.taxIdentificationNumber"
        />
        <TgsField
          label="Entity Address"
          placeholder="Enter address..."
          tgsField="entities.address"
        />
        <TgsField
          label="Country"
          placeholder="Enter country..."
          tgsField="entities.country"
        />
        <TgsField
          label="LEI Number"
          placeholder="Enter LEI number..."
          tgsField="entities.leiNumber"
        />
        <TgsField
          label="Social Type"
          placeholder="Select social type..."
          tgsField="socials.socialType"
        />
        <TgsField
          label="Social Name"
          placeholder="Enter social name..."
          tgsField="socials.name"
        />
        <TgsField
          label="Tag Name"
          placeholder="Enter tag name..."
          tgsField="tags.name"
        />
        <TgsField
          label="Tag Types"
          placeholder="Select tag types..."
          tgsField="tags.tagTypes"
        />
        <TgsField
          label="Tag Description"
          placeholder="Enter tag description..."
          tgsField="tags.description"
        />
        <TgsField
          label="Deployment Types"
          placeholder="Select deployment types..."
          tgsField="smartContractDeployments.deploymentTypes"
        />
        <TgsField
          label="Deployed On ID"
          placeholder="Enter deployment ID..."
          tgsField="smartContractDeployments.deployedOnId"
        />
        <TgsField
          label="Asset Standards"
          placeholder="Select asset standards..."
          tgsField="smartContractDeployments.assetStandards"
        />
        <TgsField
          label="Contract Deployment ID"
          placeholder="Enter deployment ID..."
          tgsField="smartContracts.deploymentId"
        />
        <TgsField
          label="Contract Name"
          placeholder="Enter contract name..."
          tgsField="smartContracts.name"
        />
        <TgsField
          label="Contract Address"
          placeholder="Enter contract address..."
          tgsField="smartContracts.address"
        />
        <TgsField
          label="Contract Deployment Date"
          placeholder="Enter deployment date..."
          tgsField="smartContracts.deploymentDate"
        />
        <TgsField
          label="URL Type"
          placeholder="Select URL type..."
          tgsField="urls.urlType"
        />
        <TgsField label="URL" placeholder="Enter URL..." tgsField="urls.url" />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
