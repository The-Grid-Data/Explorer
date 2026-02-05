import { useQuery } from '@tanstack/react-query';

async function validateDomain(domain: string): Promise<boolean> {
  const res = await fetch(`/api/validate-url?domain=${encodeURIComponent(domain)}`);
  const data = await res.json();
  return data.valid;
}

export function useValidateUrl(domain: string, enabled = true) {
  const { data: isValid, isLoading } = useQuery({
    queryKey: ['validate-url', domain],
    queryFn: () => validateDomain(domain),
    enabled,
    staleTime: 60 * 60 * 1000, // 1 hour
    retry: false,
    placeholderData: true // optimistic — render as link immediately
  });

  return { isValid: isValid ?? true, isLoading };
}
