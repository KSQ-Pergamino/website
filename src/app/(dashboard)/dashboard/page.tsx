import { auth } from '@/config/auth.config';
import { redirect } from 'next/navigation';

export default async function Dashboard() {

  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      <pre>
        {
          JSON.stringify(session.user, null, 2)
        }
      </pre>
    </div>
  )
}