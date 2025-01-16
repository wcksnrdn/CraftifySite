// pages/protected.tsx
"use client";

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProtectedPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push('/login'); // Redirect if not logged in
  }, [session, status]);

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>This is a protected page</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  );
};

export default ProtectedPage;
