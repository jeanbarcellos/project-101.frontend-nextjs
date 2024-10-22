import { useRouter } from "next/router"

export default function PostDetailPage() {
  const router = useRouter()

  return (
    <>
      <h1>Post</h1>
      <p>Post id: {router.query.id}</p>
      <p>
        <button onClick={() => router.push("/about")}>Voltar </button>
      </p>
    </>
  )
}
