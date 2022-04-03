export default function(context) {
  console.log("[Middleware] Check Auth");
  //client면 context.req 가 null로 갈 것이다.
  context.store.dispatch("initAuth", context.req);
}
