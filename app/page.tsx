import { exampleAction } from "@/app/action";

export default async function Home() {
  return (
    <main>
      <form action={exampleAction}>
        <button>Submit</button>
      </form>
    </main>
  );
}
