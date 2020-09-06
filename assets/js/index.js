(function () {
  //See in Console; seed being loaded
  console.log("MODAL:  ", modal);

  function AppViewModel() {
    var self = this;
    self.routes = ["home", "trivia", "result", "mark-sheet"];

    // Place All Observables here
    self.jsNinja = ko.observable();
    self.currentRoute = ko.observable();
    self.currentTriviaIndex = ko.observable();

    self.toRouter = function (ctx, event) {
      if (!!event.target.dataset && !!event.target.dataset.value) {
        if (!!self.jsNinja()) {
          self.currentRoute(event.target.dataset.value);
        } else {
          alert("Please enter your name");
        }
      }
    };

    self.currentRoute("home");
  }

  // knockout Binding
  ko.applyBindings(new AppViewModel());
})();
