import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page prose-page">
      <h1>That page is not in this version</h1>
      <p>The species set is still the first ten. The checker and the species index are the way back in.</p>
      <p>
        <Link href="/">Home</Link>
        {" · "}
        <Link href="/species">Species</Link>
      </p>
    </div>
  );
}
