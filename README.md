### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser

# prueba_tecnica-BridgeForBillions

Frontend Developer Coding Challenge

Description
This coding challenge consists of developing a client application for Discogs.
Discogs is the biggest database of information about audio recordings in all formats (cassette, vinyl,
CDs, etc.) Discogs’ RESTful open API allows developers to access JSON-formatted information about
Database objects such as Artists, Releases, and Labels. You can read more about the API possibilities
here: https://www.discogs.com/developers/
The application must have the following features:
- Search. There should be an input field to search by artist, album, or both. Tip: in order to do a
search you first need to create an account in Discogs and generate a Token, then add it to the
header of your request (learn more at
https://www.discogs.com/developers/#page:authentication)
- Pagination. The results from the search should be shown with pagination.
- Detail. The results items should be clickable and show all the further details (styles, title,
artists, year, image, tracklist, etc.) in a different component (i.e. modal, card, or other...).
- Collection. Besides the search and the results list, you might list your collection of records
stored in the folder “All”.
- Add to the collection. Add a button next to each search result to Add the item to your
collection.
- Optional: Managing the store using Redux would be a plus.

Considerations
- Using ReactJS is required, you can choose between using Class-based components or
functional components and Hooks, being Hooks preferable. You can use a UI library such as
https://ant.design/, Material UI, or Boostrap to render fancy elements, we use AntDesign in our
platform.

- The design of the website is up to you. You can be creative here with any type of idea and focus
on several aspects (more design, more functionality, both...), just show us what you like most
while coding :)
