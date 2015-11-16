Package.describe({
  summary: "Reaction UI - Components for Reaction Commerce",
  name: "reactioncommerce:reaction-ui",
  version: "0.1.0",
  git: "https://github.com/reactioncommerce/reaction-ui.git"
});

Npm.depends({
  "classnames": "2.2.0",
  "react-textarea-autosize": "3.1.0"
  // "react-anything-sortable": "1.0.0"
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
  api.use("react");
  api.use("less");

  // Community Packages
  api.use("cosmos:browserify");

  // meteor add-on packages
  api.use("reactioncommerce:core@0.9.4");

  api.addFiles("lib/client.browserify.js", "client");

  // api.addFiles("server/register.js", ["server"]); // register as a reaction package
  // api.addFiles("server/stripe.js", ["server"]);

  api.addFiles("client/components/components.jsx", "client");
  api.export("ReactionUI");

  api.addFiles("client/components/button/button.jsx", "client");
  api.addFiles("client/components/button/button.less", "client");

  api.addFiles("client/components/numericInput/numericInput.html", "client");
  api.addFiles("client/components/numericInput/numericInput.js", "client");

  api.addFiles("client/components/textfield/textfield.jsx", "client");
  api.addFiles("client/components/textfield/textfield.less", "client");
  api.export("TextField");

  api.addFiles("client/components/metadata/metadata.jsx", "client");
  api.addFiles("client/components/metadata/metadata.less", "client");
  api.export("Metadata");

  api.addFiles("client/components/tags/tags.jsx", "client");
  api.addFiles("client/components/tags/tags.less", "client");
  api.export("TagList");

  api.addFiles("client/styles/base.less", "client");
  api.addFiles("client/styles/variables.less", "client");
  api.addFiles("client/styles/rtl.less", "client");
  api.addFiles("client/styles/mixins.less", "client");
});
