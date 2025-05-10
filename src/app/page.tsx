import Link from "next/link";

export default function Home() {
  return (
    <div className="
        space-y-10
    ">
        <h1 className="
            font-poppins font-semibold
            text-7xl uppercase
        ">
            The<br />
            Form of<br />
            Music
        </h1>
        <Link href="/signup">
            Create an account
        </Link>
    </div>
  );
}
