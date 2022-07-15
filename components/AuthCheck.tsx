import { ReactNode } from "react";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@lib/context";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

// Component's children only shown to logged-in users
export default function AuthCheck({ children, fallback }: Props) {
  const { username } = useContext(UserContext);

  return (
    <>
      {username ? children : fallback || <Link href="/enter">You must be signed in</Link>}
    </>
  );
}
