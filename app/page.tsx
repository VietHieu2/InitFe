import { getCurrentUserServer } from '@/lib/userService';

export default async function Home() {
  const res = await getCurrentUserServer();
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">Hello</section>
    </div>
  );
}
