import Link from "next/link";

// home page
export default function Home() {
  return (
    <>
      <h1 className="mb-15">Hello, Next.js!</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/post">Post</Link>
          <ul>
            <li>
              <Link href="/post/1">Post 1</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
