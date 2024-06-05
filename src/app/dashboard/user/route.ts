import { users } from '@/src/app/dashboard/user/data';


export async function GET() {
    return Response.json(users);
}

export async function POST(request: Request) {
    const user = await request.json();
    const newUser = { ...user,
        id: user.length + 1,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        message: user.message
    };
    user.push(newUser);
    return new Response(JSON.stringify(newUser),{
        headers: {
            'Content-Type': 'application/json'
        },
status: 201,
});
}
