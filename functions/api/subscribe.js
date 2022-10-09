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

  const { cf } = request;
  const { city, country } = cf;

  try {
    const body = {
      city: city,
      country: country,
      request: request,
      bodyAsJSON: await request.json(),
      actionnetwork: await sentActionNetworkRequest(env.ACTIONNETWORK_API_KEY),
    };

    let response = new Response(JSON.stringify(body), {
      status: 200,
      statusText: "OK",
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Headers", "*");

    return response;
  } catch (error) {
    try {
      return new Response(error);
    } catch (error) {
      return new Response("error");
    }
  }
}

async function sentActionNetworkRequest(apiKey) {
  const url = "https://actionnetwork.org/api/v2/people";
  const data = {
    person: {
      family_name: "Smith",
      given_name: "John",
      postal_addresses: [{ postal_code: "20009" }],
      email_addresses: [{ address: "jsmith@mail.com" }],
      phone_number: [{ number: "12021234444" }],
    },
    add_tags: ["volunteer", "member"],
  };

  // https://developers.cloudflare.com/workers//runtime-apis/request#requestinit
  const RequestInit = {
    method: "POST",
    // https://developer.mozilla.org/en-US/docs/Web/API/Headers
    headers: new Headers({
      "OSDI-API-Token": apiKey,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  };

  // https://developers.cloudflare.com/workers/runtime-apis/fetch/
  const actionnetworkResponse = fetch(url, RequestInit);

  // const response = axios
  //   .post(url, data, config)
  //   .then((response) => {
  //     functions.logger.log("🔵 actionnetwork response data", response.data);

  //     return response.data;
  //   })
  //   .catch((error) => {
  //     functions.logger.error("🔴 actionnetwork error", error);
  //   });

  return actionnetworkResponse;
}
