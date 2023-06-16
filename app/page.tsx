import { exampleAction } from "@/app/action";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main>
      <form action={exampleAction}>
        <button>Submit</button>
      </form>
    </main>
  );
}
