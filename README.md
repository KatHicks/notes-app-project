# Notes App
### Makers Academy Week No. 7

[![Code Climate](https://codeclimate.com/github/KatHicks/notes-app-project/badges/gpa.svg)](https://codeclimate.com/github/KatHicks/notes-app-project)

### Instructions

We worked on this project for three days as a team.

Below are the instructions:

>Take the user stories and use them to build a frontend, single page web app.
>
> You can't use existing web frameworks, libraries or even a test library (e.g. no Angular, React, Jasmine, jQuery).

Below are the user stories that guided this project:

```
As a programmer,
So that I can record something I need to remember,
I can create a new note.
```

```
As a programmer,
So that I can find the one I want,
I can see a list of my notes, where each note is abbreviated to the first 20 characters.
```

```
As a programmer,
So that I can see all the information in the note,
I can see the full text of an individual note on its own page.
```

### Objectives

* Are you having fun?
* Are you a better developer than you were yesterday?
* **Can you write a frontend, single page app using only pure JavaScript?**

### Using my application

* Download the source code using `$ git clone`
* Open the `index.html` file in the browser to view the app

**OR**

* Download the source code using `$ git clone`
* Navigate into the project directory using `$ cd`
* Run `$ npm install` to install the http-server package
* Run `$ node node_modules/http-server/bin/http-server` in the command line and go to http://localhost:8080/ in the browser


### Running the tests

* Open the `testRunner.html` file in the browser and open up the browser console to view the tests

### Dependencies

* Written in JavaScript
* Styled using CSS

*Note that one of the specifications of the challenge this week was to not use any external libraries or frameworks - that even meant no testing frameworks or Bootstrap.*

### Approach

* Spent the first day planning out the project - including our wireframes for how the app would look, our domain model and how we were going to keep track of tasks
* Decided on our domain model having two objects a note and a list - and used the constructor/prototype pattern to define these objects
* Wrapped our event handling code in a module
* One key element of our app design was that the text box for entering new notes could be shown and hidden on click via the button in the navbar

### Reflections

* Was really interesting having to write our own testing library
  * Started off by just calling our methods and checking that the output was as expected.
  * Could then start to see repeated code and was able to start extracting a very basic testing library
  * Thought this was a really good exercise for making us go under the hood and build a deeper understanding of how testing libraries actually work
* Would have been nice to extend the testing library to be more sophisticated with `describe` and `it` blocks, for example

### Collaborators

Konrad Schlatte, Frankie Shaw and Katerina Loschinina
