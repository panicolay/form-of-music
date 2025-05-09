import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The Form of Music</h1>
      <Link href="/signup">
        Create an account
      </Link>
    </div>
  );
}
