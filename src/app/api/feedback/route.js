import { feedback } from "../route";

export async function GET(request) {
  return Response.json(feedback);
}
export async function POST(request) {
  const data = await request.json();
  return Response.json({ message: "hello ", data });
}
