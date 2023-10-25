import { connect } from "mongoose";

const { connectToDatabase } = require("@/DB/dbConfig");
const { default: User } = require("@/models/User");
const { NextResponse, NextRequest } = require("next/server");

export async function POST(request) {
  try {
    const { name, email } = await request.json();
    await connectToDatabase();
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ user }, { status: 200 });
    }
    const newUser = new User({ name, email });
    const reqUser = await newUser.save();
    console.log(reqUser);
    return NextResponse.json({ user: reqUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    return NextResponse.json({ message: "Hello" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
