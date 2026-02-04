'use client';

import { ProfileDataCard } from './profile-data-card';

export type AttributeCardProps = {
  attribute: {
    id: string;
    value?: string | null;
    attributeType?: {
      id: string;
      name?: string | null;
      definition?: string | null;
      slug?: string | null;
    } | null;
    coreTableName?: {
      tableName?: string | null;
    } | null;
  };
};

export const AttributeCard = ({ attribute }: AttributeCardProps) => {
  return (
    <ProfileDataCard
      title={attribute.attributeType?.name ?? 'Attribute'}
      description={attribute.attributeType?.definition ?? undefined}
      dataPoints={[
        {
          label: 'Value',
          value: attribute.value ?? '-'
        }
      ]}
    />
  );
};
