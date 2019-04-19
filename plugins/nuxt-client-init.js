export default (ctx) => {
  const { app } = ctx;

  return ctx.store.dispatch('nuxtClientInit', app);
}
