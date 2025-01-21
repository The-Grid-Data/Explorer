'use client';

import { ClerkProvider, useAuth, useOrganization, useUser } from '@clerk/nextjs';
import { type ReactNode, createContext, useContext } from 'react';

type OrganizationMetadata = {
  id: string;
  slug: string;
  name: string;
} | null;

type ClerkContextType = {
  organizationMetadata: OrganizationMetadata;
  isLoading: boolean;
  isAuthenticated: boolean;
};

const ClerkContext = createContext<ClerkContextType>({
  organizationMetadata: null,
  isLoading: true,
  isAuthenticated: false
});

function ClerkContextProvider({ children }: { children: ReactNode }) {
  const { isLoaded: isAuthLoaded, isSignedIn } = useAuth();
  const { isLoaded: isOrgLoaded, organization } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();

  const isLoading = !isAuthLoaded || !isOrgLoaded || !isUserLoaded;
  const isAuthenticated = isSignedIn ?? false;

  const organizationMetadata = organization ? {
    id: organization.id,
    slug: (organization.publicMetadata?.slug as string) || 'default',
    name: organization.name
  } : null;

  return (
    <ClerkContext.Provider value={{
      organizationMetadata,
      isLoading,
      isAuthenticated
    }}>
      {children}
    </ClerkContext.Provider>
  );
}

export function ClerkProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary hover:bg-primary/90',
          footerActionLink: 'text-primary hover:text-primary/90'
        }
      }}
    >
      <ClerkContextProvider>
        {children}
      </ClerkContextProvider>
    </ClerkProvider>
  );
}

export function useClerkContext() {
  const context = useContext(ClerkContext);
  if (context === undefined) {
    throw new Error('useClerkContext must be used within a ClerkProviderWrapper');
  }
  return context;
}
