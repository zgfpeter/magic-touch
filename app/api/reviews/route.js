// import { NextResponse } from 'next/server';

// export async function GET() {
//     const PLACE_ID = 'ChIJN1t_tDeuEmsRR9234MmFsUU'; // Googleplex Dummy ID

//     // TEMPORARY HARDCODED KEY FOR TESTING (Replace with your actual string)
//     const API_KEY = 'YOUR_ACTUAL_GOOGLE_CLOUD_API_KEY_HERE';

//     const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,displayName&key=${API_KEY}`;

//     try {
//         const response = await fetch(url, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         const data = await response.json();

//         return NextResponse.json({
//             reviews: data.reviews || [],
//             rating: data.rating || 0
//         });
//     } catch (error) {
//         return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
//     }
// }

import { NextResponse } from 'next/server';

export async function GET() {
    // Simulate network latency so you can see your loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return a mock payload mimicking the Google Places API (New) response structure
    return NextResponse.json({
        rating: 4.8,
        reviews: [
            {
                authorAttribution: {
                    displayName: "Alex Thompson",
                    photoUri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                },
                rating: 5,
                text: {
                    text: "Absolutely incredible service! They were punctual, extremely professional, and left the workspace spotless after painting my living room. Highly recommend the Prime Build Construction team!",
                },
                relativePublishTimeDescription: "2 days ago",
            },
            {
                authorAttribution: {
                    displayName: "Ciara Murphy",
                    photoUri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
                },
                rating: 5,
                text: {
                    text: "Fixed our sticking back door and patched up some damaged drywall effortlessly. It is so hard to find reliable tradespeople in Ireland, but these guys are fantastic.",
                },
                relativePublishTimeDescription: "1 week ago",
            },
            {
                authorAttribution: {
                    displayName: "Liam O'Shea",
                    photoUri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                },
                rating: 5,
                text: {
                    text: "Superb power washing on our driveway and back patio. Removed years of moss and algae buildup—it literally looks brand new again. Very polite and efficient.",
                },
                relativePublishTimeDescription: "3 weeks ago",
            },
        ],
    });
}