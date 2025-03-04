import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // If using Prisma

export async function GET() {
  try {
    const thoughts = await prisma.thought.findMany();
    return NextResponse.json(thoughts);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching thoughts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { title, excerpt, date, readTime, image, content } = await req.json();
    const newThought = await prisma.thought.create({
      data: { title, excerpt, date, readTime, image, content },
    });
    return NextResponse.json(newThought);
  } catch (error) {
    return NextResponse.json({ error: "Error adding thought" }, { status: 500 });
  }
}
