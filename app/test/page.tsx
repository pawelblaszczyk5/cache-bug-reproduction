export default async function TestPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <h1>Hello world</h1>;
}
