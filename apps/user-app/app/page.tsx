import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export default function Page(): JSX.Element {
  return <div className="bg-red-400">Hello from User-app</div>;
}
