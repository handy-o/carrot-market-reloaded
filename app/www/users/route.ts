// .ts 라는 파일명을 썼다는 것은 이게 API route 라는 걸 NextJS에게 알려주는 것 !

import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    return Response.json({
        ok: true,
    })
}

export async function POST(request: NextRequest) {
    //request.cookies.get(""); // 쿠키정보를 알고 싶을 때
    const data = await request.json();
    return Response.json(data);
}