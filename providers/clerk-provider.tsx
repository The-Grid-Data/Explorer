'use client';

import { ClerkProvider, useAuth, useOrganization, useUser } from '@clerk/nextjs';
import { type ReactNode, createContext, useContext, useEffect, useState } from 'react';

type UserMetadata = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string;
} | null;

type OrganizationMetadata = {
  id: string;
  slug: string;
  name: string;
} | null;

type ClerkContextType = {
  organizationMetadata: OrganizationMetadata;
  userMetadata: UserMetadata;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
};

const ClerkContext = createContext<ClerkContextType>({
  organizationMetadata: null,
  userMetadata: null,
  token: null,
  isLoading: true,
  isAuthenticated: false
});

function ClerkContextProvider({ children }: { children: ReactNode }) {
  const { isLoaded: isAuthLoaded, isSignedIn, getToken } = useAuth();
  const { isLoaded: isOrgLoaded, organization } = useOrganization();
  const { isLoaded: isUserLoaded, user } = useUser();
  const [token, setToken] = useState<string | null>(null);

  const isLoading = !isAuthLoaded || !isOrgLoaded || !isUserLoaded;
  const isAuthenticated = isSignedIn ?? false;

  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        const jwt = await getToken();
        setToken(jwt);
      } else {
        setToken(null);
      }
    };

    void fetchToken();
  }, [isAuthenticated, getToken]);

  const organizationMetadata = organization ? {
    id: organization.id,
    slug: typeof organization.publicMetadata?.slug === 'string'
      ? organization.publicMetadata.slug
      : 'default',
    name: organization.name
  } : null;

  const userMetadata = user ? {
    id: user.id,
    email: user.primaryEmailAddress?.emailAddress ?? '',
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl
  } : null;

  return (
    <ClerkContext.Provider value={{
      organizationMetadata,
      userMetadata,
      token,
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
