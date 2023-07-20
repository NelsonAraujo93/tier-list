import Link from 'next/link';

export default function PostIndex() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </main>
  )
}
