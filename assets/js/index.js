(function () {
  //See in Console; seed being loaded
  console.log("SEEDS:  ", seeds);

  //   Try Out with KnockoutJS
  function AppViewModel() {
    this.jsNinja = ko.observable("JS NINJA IS SUPER COOL!");
  }

  // Activates knockout.js
  ko.applyBindings(new AppViewModel());
})();
