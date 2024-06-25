1. On the page should be placed two objects: input for entering text and button for applying the result.
2. The user enters any string in input.
3. Clicks on the button and entered string is displayed under the form.
4. Implement two possibilities of moving letters to any place:
   - by one letter
   - several highlighted letters
5. Hold down the mouse button and drag creating a rectangle. All symbols that entered this rectangle must become highlighted. Highlighted symbols must change their color.
   The possibility to select several letters by clicking while holding down the Ctrl key with a change in the colos of the active ones. Deselect on repeated click.
6. Depending on point 4. implement movement 4A or 4B according to the following algorithms:
   - user pinches any letter(s) in the line and it is moved by the cursor to any place on the screen
   - after moving, the letter sets the last position of the cursor
   - if action 4A is performed and the symbol that moves to the place of another symbol is released, then the another symbol becomes the previous place of the moved one. They do not overlap each other
   - user can move not only one letter, but also scatter the entire word throughout the document
7. You cannot use ready-made solutions or libraries for moving objects. Only pure HTML, JS and CSS when needed. Design to your taste.
