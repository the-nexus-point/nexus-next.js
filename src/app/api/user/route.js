const { connectToDatabase } = require("@/DB/dbConfig");
const { default: User } = require("@/models/User");
const { NextResponse } = require("next/server");

export async function POST(req) {
  const { name, email } = await req.json();
  await connectToDatabase();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Registered" });
}
