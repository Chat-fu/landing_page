'use client'

import { ChangingPageProvider } from '@/components/hooks/ChangingPageContext';
import React, { ReactNode } from 'react';

// Import other providers as needed

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ChangingPageProvider>
      {children}
    </ChangingPageProvider>
  );
}
