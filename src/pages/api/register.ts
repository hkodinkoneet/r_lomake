import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => { 

    try {

    const formData = await request.formData();

    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const serial = formData.get('serial')?.toString();
    const purchaseDate = formData.get('purchaseDate')?.toString();
    const registrationDate = formData.get('registrationDate')?.toString();

    // Required fields check
    if (!name || !serial || !purchaseDate || !registrationDate) {
      return new Response('Pakollisia kenttiä puuttuu', { status: 400 });
    }

    const response = await fetch(
      `https://api.webflow.com/v2/collections/${process.env.WEBFLOW_COLLECTION_ID}/items`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.WEBFLOW_CMS_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isDraft: false,
          isArchived: false,
          fieldData: {
                name: name,
                tuotekoodi: serial,
                sahkoposti: email,
                puhelinnumero: phone,
                ostopaiva: purchaseDate,
                rekisterointipaiva: registrationDate,
},
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webflow CMS error:', errorText);
      return new Response('Rekistöröinti epäonnistui', { status: 500 });
    }

    // Success → redirect to thank you page
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/kiitos',
      },
    });

  } catch (error) {
    console.error('Server error:', error);
    return new Response('Server error', { status: 500 });
  }

};