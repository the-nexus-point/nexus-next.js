import Feed from "@/components/feed/Feed";
import { signIn } from 'next-auth/react';


export default () => {
  return <div>
    <h1>Login Page</h1>
    <button onClick={() => signIn()}>Sign in with Google</button>
  </div>;
};
