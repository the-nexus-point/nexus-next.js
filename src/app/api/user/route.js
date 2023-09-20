import { connect } from "mongoose";

const { connectToDatabase } = require("@/DB/dbConfig");
const { default: User } = require("@/models/User");
const { NextResponse, NextRequest } = require("next/server");

connect();

export async function POST(request) {
  const { name, email } = await request.json();
  await connectToDatabase();
  await User.create({ name, email });

  try {
    const reqBody = await request.json();
    const { name, email } = reqBody;
    console.log(reqBody);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
