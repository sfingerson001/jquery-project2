# jquery-project2
For this assignment we will add information to a web page based on JSON data from an Ajax request.

This assignment may build on the work done for Project 1, though that is not required. If you build on Project 1, make sure that you alter it appropriately to meet the requirements below.

## Goals:

- Use the jQuery ready function to keep your code out of global scope
- Use JavaScript coding best practices for variable and function definition
- Design HTML to structure and display JSON data
- Use Ajax to get information to display
- Use jQuery to build HTML to add items to the DOM
- Use jQuery to handle click events
- Show and present your code to the class in 8-10 minutes


## GitHub Repository
[https://github.com/htc-ccis2591/jquery-project2/](https://github.com/htc-ccis2591/jquery-project2/)

As usual you will need to fork and clone this repository to begin the assignment, and submit a pull request for grading when the assignment is complete.  

## Design the JSON structure
Select some data for some things that you are interested in.  You may reuse your favorite things from Project 1, or choose something different.  You should have a list of at least 3 things.  Each data item should have at least 3 properties and at least one of those properties must also be a list of things.  

For example, you might have data for some movies. Each movie might include a name, year released, a description, and a list of actors.

Write JSON to describe your data in a separate JSON file.  Each of your “things” should be an object in an array, to allow for any number of things to be added later.

## Design the HTML Layout
Before you try to write JavaScript code to put these favorite things into HTML, you’ll want to know what that HTML looks like.  Update the test.html page with the HTML to show one of your favorite things.  This will allow you to address any layout and styling concerns before moving on to the JavaScript code.  

Note: The test.html page will be graded, so you might as well do it first and make your life easier.

As you design the structure, think of each thing as a section, article, or div element with a heading tag and other appropriate tags such as paragraphs, images, lists etc.  The content must include a heading that is shown initially while the other detail content is hidden.

##Page Behavior
When the page first loads, you should display only the headings for all of your items.

The content must include a heading that is shown initially while the other detail content is hidden.
When the heading is clicked, that should toggle the display of the detail items. If the details are currently visible, then they should be hidden.  If they are currently hidden, then they should be shown.
It must be possible to see the details of all the items at the same time.

When the summary item is clicked, all other item’s detail information should be hidden and that items detail information should be shown.  

Important Note:  Yes, jQuery has a UI component to do this.  No you cannot use it for this assignment. The assignment involves the creation of your own show/hide behavior to illustrate that you understand some basic jQuery and JavaScript.  Using any other 3rd party component to do this defeats the purpose of the assignment.

## Code Structure
It is expected that you will use functions to organize your code and that you will follow JavaScript and jQuery best practices.  Watch the scope of your variables, and remember to define them at the start of their scope/function.

It is required that you have a function that builds the HTML for one data item (pass that object in as an input parameter) so that you do not repeat that code over and over to build each item. This will also make it easier for you to change or modify that layout later if needed or desired.

## Presentation
The project must be submitted with a pull request before the start of class the day that it is due.  In-class, you will show your page to the class as published on GitHub, and walk through what your page does and the code that you wrote. The presentation is limited to 10 minutes, with a hard rude stop if you run over.  However you also do not want your presentation to be too short or less than 8 minutes.

What should you cover?

- Who you are!!! Do not forget to introduce yourself.  It may help to write your name on the board so people do not mishear.
- What your page does. Yes, all of them basically do the same thing.  It’s ok. Pretend that someone comes in and flash clears everyone’s memory between presentations. You need to say it all again.
- The things are super cool and all, but remember to focus on the code.  
