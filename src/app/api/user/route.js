import { connect } from "mongoose";

const { connectToDatabase } = require("@/DB/dbConfig");
const { default: User } = require("@/models/User");
const { NextResponse, NextRequest } = require("next/server");

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { name, email } = reqBody;
    const newUser = new User({ name, email });
    const reqUser = await newUser.save();
    console.log(reqUser);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
