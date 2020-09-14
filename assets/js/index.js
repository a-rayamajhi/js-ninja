(function () {
  function randomizeTenQuestions(modal) {
    positions = [];
    questions = [];
    //create a list of position numbers equal to the number of questions in modal. Could be fixed at 30 but this is more flexible.
    for (var i = 0; i < modal.length; i++) {
      positions.push(i);
    }
    /* Iterate over the positions list 10 times.
     *  Pull a random number from the positions list.
     *  Use that number to copy a question obj with that index into questions arr.
     *  Eliminate that number from the pool to eliminate repeat picks.
     */
    for (var i = 0; i < 10; i++) {
      randomNum = positions[Math.floor(Math.random() * positions.length)];
      questions.push(modal[randomNum]);
      index = positions.indexOf(randomNum);
      positions.splice(index, 1);
    }
    return questions;
  }

  function AppViewModel() {
    const self = this,
      COUNT = 10;
    self.states = ["home", "trivia", "result", "mark-sheet"];

    // Place All Observables here
    /**
     * jsNinja: User
     * currentState: current route
     * currentTrivia: current question
     * chosenItem: Clicked radio button of the trivia
     * chosenItems: Store all user's answers list
     */
    self.jsNinja = ko.observable();
    self.currentState = ko.observable();
    self.currentTrivia = ko.observable();
    self.chosenItem = ko.observable();
    self.chosenItems = [];
    self.length = ko.observable(0);
    self.data = randomizeTenQuestions(modal);
    self.score = ko.observable(0);

    self.toState = function (ctx, event) {
      if (!!event.target.dataset && !!event.target.dataset.value) {
        if (!!self.jsNinja()) {
          if (self.length() >= COUNT) {
            if (event.target.dataset.value === "trivia") {
              self.currentState("result");

              self.score(calculateScore());
              if (!!self.chosenItem()) {
                self.chosenItems.push(self.chosenItem());
              }
            }
            if (event.target.dataset.value === "home") {
              self.jsNinja(null);
              self.currentState("home");
              self.currentTrivia(null);
              self.chosenItem(null);
              self.chosenItems = [];
              self.length(0);
              self.data = randomizeTenQuestions(modal);
            }
          } else {
            self.currentState(event.target.dataset.value);
            self.currentTrivia(self.data[self.length()]);
            if (!!self.chosenItem()) {
              self.chosenItems.push(self.chosenItem());
            }
            self.length(self.length() + 1);
          }
        } else {
          alert("Please enter your name");
        }
      }
    };

    self.currentState("home");

    function calculateScore() {
      return self.chosenItems.filter((el) => el.hasOwnProperty("isCorrect"))
        .length;
    }

    window.onbeforeunload = function () {
      if (self.currentState() !== "home") {
        return true;
      }
    };
  }

  // knockout Binding
  ko.applyBindings(new AppViewModel());
})();
