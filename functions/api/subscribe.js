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
      // city: city,
      // country: country,
      // request: request,
      test: "test!",
    };

    response = new Response(JSON.stringify(body));

    // response.headers.set("Access-Control-Allow-Origin", "*");
    // response.headers.set("Access-Control-Allow-Headers", "*");

    return response;
  } catch (error) {
    try {
      return new Response(error);
    } catch (error) {
      return new Response("error");
    }
  }
}
