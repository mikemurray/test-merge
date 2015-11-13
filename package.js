Package.describe({
  summary: "Reaction UI - Components for Reaction Commerce",
  name: "reactioncommerce:reaction-ui",
  version: "0.1.0",
  git: "https://github.com/reactioncommerce/reaction-ui.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2");

  // meteor base packages
  api.use("standard-minifiers");
  api.use("mobile-experience");
  api.use("meteor-base");
  api.use("mongo");
  api.use("blaze-html-templates");
  api.use("session");
  api.use("jquery");
  api.use("tracker");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use("spacebars");
  api.use("check");

  // meteor add-on packages

  api.use("less");
  api.use("reactioncommerce:core@0.9.4");

  // api.addFiles("server/register.js", ["server"]); // register as a reaction package
  // api.addFiles("server/stripe.js", ["server"]);

  api.addFiles("client/components/numericInput/numericInput.html", "client");
  api.addFiles("client/components/numericInput/numericInput.js", "client");

  api.addFiles("client/styles/base.less", "client");
  api.addFiles("client/styles/variables.less", "client");
  api.addFiles("client/styles/rtl.less", "client");
  api.addFiles("client/styles/mixins.less", "client");

});
