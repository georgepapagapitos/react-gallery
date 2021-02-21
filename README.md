# React Gallery

## Description

Duration: Weekend Challenge

-The task was to create an image gallery that allows a user to add, delete, and like images.  There is an input form that receives inputs from
the user and sends that data to a local database, and then displays the image in the gallery.
-Each image will toggle when clicked, showing the description.
-Each image also allows a user to click a heart to 'love' the image and the total 'loves' are counted and displayed.
-There is also a corresponding delete button that allows the user to delete an image from the gallery and the database.

## Screen Shot

[screenshot](public/images/screenshot.png)

## Prerequisites

-Node.js
-Express
-PostgreSQL

## Installation

1. Create a database named 'react_gallery'
2. Queries in database.sql are set up to create images table + a default image
3. Run npm install
4. Run npm run server
5. Run npm run client
6. npm run client will open a new tab in your default browser

## Usage

Add images using their URL and a short description that will display when the image is clicked.
The heart icon will add a 'love' to the image.  The 'X' will prompt the user to delete the image.
