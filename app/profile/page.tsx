// pages/profile.tsx

import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <img src={session.user.image} alt={session.user.name} />
    </div>
  );
};

export default Profile;
