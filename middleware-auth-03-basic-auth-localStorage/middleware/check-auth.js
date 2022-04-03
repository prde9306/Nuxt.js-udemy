export default function(context) {
  console.log("[Middleware] Check Auth");
  //client에서만 로컬스토리지 확인 가능해서 process.client 사용함.
  if (process.client) {
    context.store.dispatch("initAuth");
  }
}
