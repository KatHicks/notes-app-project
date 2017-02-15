# notesApp
Notes App Group Project Stream<br>
![Screenshot](http://i.imgur.com/tBLs5fs.png)
### Notes app user stories

```
As a programmer
So I can find the one I want
I can see a list of my notes, where each note is abbreviated to the first 20 characters


As a programmer
So I can record something I need to remember
I can create a new note

As a programmer
So I can see all the information in the note
I can see the full text of an individual note on its own page
```
(NB: notes are not permanently stored. If the user refreshes their web page, they'll lose their notes, and that's fine.)
### Installing
$ git clone https://github.com/schlattk/notesApp.git
### Testing
$ open testRunner.html <br>
Tests are stored in '/tests/unit', use test-library.js and are run in testRunner.html<br>
### Running
$ open index.html (for a file in browser)<br>
or<br>
$ node node_modules/http-server/bin/http-server (for a local server)<br>
then go to http://localhost:8080/
