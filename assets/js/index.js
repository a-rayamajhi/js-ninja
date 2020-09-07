(function () {
  //See in Console; seed being loaded
  console.log("MODAL:  ", modal);

  function AppViewModel() {
    var self = this;
    self.states = ["home", "trivia", "result", "mark-sheet"];

    // Place All Observables here
    self.jsNinja = ko.observable();
    self.currentState = ko.observable();
    self.currentTrivia = ko.observable();
    self.chosenItem = ko.observable();
    self.chosenItems = [];
    self.length = 0;

    self.toState = function (ctx, event) {
      console.log(self.length, self.chosenItems);
      if (!!event.target.dataset && !!event.target.dataset.value) {
        if (!!self.jsNinja()) {
          self.currentState(event.target.dataset.value);
          self.currentTrivia(modal[self.length]);
          self.length = self.length + 1;
        } else {
          alert("Please enter your name");
        }
      }
    };

    self.currentState("home");

    self.chosenItem.subscribe(function (newValue) {
      self.chosenItems.push(newValue);
    });

    window.onbeforeunload = function () {
      if (self.currentState() !== "home") {
        return true;
      }
    };
  }

  // knockout Binding
  ko.applyBindings(new AppViewModel());
})();
