# Test 1

## Overlay

On the first page load simulate page loading for 2 second.

- if the user is visiting the page for the first time show a semi black overlay with the spinner in the middle
- overlay should be shown for 2 second, after that overlay is hidden/removed and normal page is shown
- if the user refreshes the page (if not first visit anymore) normal page should be shown, not the overlay

## Main page

Page is constructed from the header, content, and footer part

### Header

- header is sticky (always at the top)
- if the user starts scrolling down header should be hidden
- if he starts scrolling up header should be shown again
- between 0-100px in height, header should always be shown, when a user is scrolling down nothing should happen until he reaches more than 100px in scroll height

#### Menu icons

- on the left and right side of the header are menu icons
- if the user clicks on the left hamburger icon left drawer should open (drawer can be empty)
- if a user clicks on the right user icon right drawer should open (drawer can be empty)
- by clicking outside the drawer, the drawer is closed

### Posts

Show the latest posts on the page

Posts API: http://as-var-croapps.ecx.local:1337/posts

- there is in a total of 10 posts to show and they should be sorted by published date (property: published)
- above the posts container are the buttons used for sorting (sort by title, author, date)
- above the posts container under the buttons is the search field, by typing in the field posts are filtered by title and description (case insensitive)
- there should be a 200ms delay between typing and filtering, if the user stops typing for 200ms filtering should happen

### Calculator

Regions API: http://as-var-croapps.ecx.local:1337/regions

Wood Types API: http://as-var-croapps.ecx.local:1337/{regionWoodsRelation}

Change {regionWoodsRelation} according to the property from regions API.

- in the "Region" select box user can select the region for which he wants to get wood types
- after the selection of the region fetch corresponding wood types depending on the "regionWoodsRelation"
- each wood has its own "woodPerSqrMeter" property which is used in the final calculation
- if width and height are populated calculate the total square meters and total wood quantity below input fields
- if any value in the select box is changed afterward dynamically update the calculation

### Footer

When a user is scrolling down and the footer becomes visible, the background color of the content should change
If he is scrolling up, the background color should also change

- if 25% of the footer is visible change the background color to #dfe1e6
- if 50% of the footer is visible change the background color to #7a869a
- if 90% of the footer is visible change the background color to #000000

Change font color accordingly so that posts are visible on dark background.

**NOTE**: Do not use any external libraries or plugins.
