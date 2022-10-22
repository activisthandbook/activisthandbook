export async function onRequestPost(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  // https://developers.cloudflare.com/pages/platform/functions/#environment-variable
  // env.ACTIONNETWORK_API_KEY;

  try {
    const requestBody = await request.json();

    const actionnetwork = await sentActionNetworkRequest(
      env.ACTIONNETWORK_API_KEY,
      requestBody,
      request.cf
    );

    const body = {
      request: request,
      requestBodyAsJSON: requestBody,
      actionnetwork: actionnetwork,
    };
    // const body = { success: true };

    let response = new Response(JSON.stringify(body), {
      status: 200,
      statusText: "OK",
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Headers", "*");
    response.headers.set("Content-Type", "application/json");
    response.headers.set("Accept", "application/json");

    return response;
  } catch (error) {
    try {
      return new Response(error);
    } catch (error) {
      return new Response("error");
    }
  }
}

async function sentActionNetworkRequest(apiKey, data, metadata) {
  const url = "https://actionnetwork.org/api/v2/people";

  const dataToSend = {
    person: {
      given_name: data.firstName,
      postal_addresses: [
        {
          locality: metadata.city,
          // region: metadata.regionCode,
          country: metadata.country,
          postal_code: metadata.postalCode,
        },
      ],
      email_addresses: [{ address: data.email }],
      phone_number: [{ number: data.phone }],
      custom_fields: {
        phone_number: data.phone,
      },
    },
    add_tags: data.tags,
  };

  // TO-DO: Sanitise data

  // const data = {
  //   person: {
  //     family_name: requestBody"Smith",
  //     given_name: "John",
  //     postal_addresses: [{ postal_code: "20009" }],
  //     email_addresses: [{ address: "jsmith@mail.com" }],
  //     phone_number: [{ number: "12021234444" }],
  //   },
  //   add_tags: ["volunteer", "member"],
  // };

  // https://developers.cloudflare.com/workers//runtime-apis/request#requestinit
  const RequestInit = {
    method: "POST",
    // https://developer.mozilla.org/en-US/docs/Web/API/Headers
    headers: new Headers({
      "OSDI-API-Token": apiKey,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(dataToSend),
  };

  // https://developers.cloudflare.com/workers/runtime-apis/fetch/
  const response = await fetch(url, RequestInit);

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  const results = await response.json();

  return { request: dataToSend, results: results };
}
