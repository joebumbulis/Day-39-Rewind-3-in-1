# Day 39: Review: 3 in 1 App

## Explorer Mode

For this assignment you all will be going back to your last 3 assignments **MarkDown Editor, Quiz,** and **Reactpardy,** to make some big changes. You will be combining them all into a single application*

* Using a fresh clone of webpack-starter-with-tests
* You app will have 4 routes
  * The `/` route will be a page welcoming users to the best Quiz/Jeopardy Clone/MarkDown Editor on the web.
  * The `/game` route will render the jeopardy game.
  * The `/quiz` route will render the quiz app.
  * The `/editor` route will render the markdown app.
* **You will not be moving over every file to this new project.**
  * You will only want to copy over the components and actions from each assignment into this new project.
* Your main focus should be on one assignment at a time.
  * Start with your **most** complete assignment.
  * Once that assignment is completely working in the new assignment. Move on to the next most complete assignment.
* Keep in mind you will still have one reducer and one state for all 3 apps, so you'll need to carefully combine the actions and state of your previous apps one at a time.
* Once all your old code is in the app and all 3 pages work the way they did previously, you will start to write tests.
* There should be a minimum of 1 unit test per component.
* There should be a minimum of 1 unit test per reducer action.

#### WHAT TO SUBMIT
* A link to a repository that should include:
* A README.md explaining your project

* In the Notes section, include a link to your project live on the internet
* As always, in the Notes section, include your confidence (1-5) and if you are anything below 5, briefly explain why.

### Adventurer Mode

* - Add a NavLink to the top of every page to allow the user to navigate around quickly and see what app they are on.
This should not break any existing navigation found on the other apps.
* - Every dispatched action in the apps should be from a function defined in /actions
* - Refactor your components to only give the minimum amount of state to each component.
  * The majority of your components should be presentation only and not be connected to the store. Keep in mind you can always pass data into a component from its parent.

### Epic Mode

* Only allow logged in users (using backendless) to use the app. Every page of the app should only load data specifically for that logged in users.
* Their notes, their quiz answers, and their jeopardy scores.
