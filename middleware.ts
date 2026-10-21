import {NextRequest,NextResponse} from 'next/server';
export function middleware(request:NextRequest){const h=new Headers(request.headers);h.set('x-emy-language',request.nextUrl.pathname.match(/^\/(en|kk)(?:\/|$)/)?.[1]||'ru');return NextResponse.next({request:{headers:h}})}
export const config={matcher:['/((?!api|_next|images|fonts|publications|share).*)']};
