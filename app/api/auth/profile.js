import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./[...nextauth]";
import { useSession } from "next-auth/react";
import axios from "axios";
import AddUpdateProfile from "../components/ProfileComponents/AddUpdateProfile";
import styles from "../styles/Profile.module.css";

const profile = ({ userData }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  if (typeof window === "undefined") return null;

  if (session) {
    return (
      <div className={styles.profile}>
        <AddUpdateProfile />
      </div>
    );
  }
  return <p>Access Denied</p>;
};

export default profile;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin/callbackUrl=${process.env.LOCAL_APP_URL}/profile`,
        permanent: false,
      },
    };
  } else {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_LOCAL_APP_URL}/api/user`
    );
    return {
      props: {
        session,
        userData: res.data,
      },
    };
  }
}