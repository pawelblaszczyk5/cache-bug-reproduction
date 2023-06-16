"use server";

import { redirect } from "next/navigation";

export const exampleAction = async (data: FormData) => redirect("/test");
