# Topics Covered

The following topics are covered in this project

## Section 10: Custom Navigation and Routing Systems

Button component

Button Theory

Props Design

Styling

TailwindCSS

react-icons libary/libraries

Passing props from the button component to the button element (...rest vs custom props)

## Section 11: Mastering the State Design Process

Accordion component

Project Organization - pages vs. components

State Design

## Section 12: Practicing Props and State Design

Dropdown component

Creating a reusable Panel component

Event Capturing and Bubbling

Capture: Find the event handler before it runs. Starting with the most parent comp and move down.
Target: execute the event handler
Bubble: Find the event handler at each immediate parent comp (takes longer without Capture phase)

## Section 13: Making Navigation Reusable

Creating a Router by scratch

Navigating between pages

Link Components

Route Components

## Section 14: Creating Portals with ReactDOM

Created a Modal component

Using createPortal with ReactDOM

## Section 15: Make a Feature-Full Data Table

Creating a datatable that is flexible for any data to be provided

Providing data array of objects, config array of abject (each element represent a column with a label and a render function)

Mapping over config for headers

Nested mapping over data then config to render cells and rows

## Section 16: Getting Clever with Data Sorting

Adding a SortableTable component to take the config array and sort on the columns with a sortValue prop

## Section 17: Custom Hooks in Depth

Refactoring some code into custom hooks to clean up components and improve reusability

## Section 18: Into the World of Reducers

Using the useReducer hook

Managing multiple states using useReducer with the one dispatch function vs multiple useState instances using multiple setter function

Action objects to manage changes to different states with various actions (action.type, action.payload, etc.)

Using the Immer library to directly mutate state
