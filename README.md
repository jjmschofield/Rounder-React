# Rounder React
A simple prototype of a product to help you remember what you need to order when you get to the bar.

This is a response to this [brief](BRIEF.md), written in React using a Redux store.

A demo of this project is available at https://jjmschofield.github.io/Rounder-React/ (note, this is hosted on GitHub pages and will not support manual editing of the window location).

## Getting Started
To run the project simply:
```
  $ npm install
  $ npm start
```

## Functionality
Presently this project is capable of the follwoing:

* A user is capable of selecting a bar near to them
* A user is capable of adding, and removing multiples of products offered from that bar
* The created round is then submitted back to the API and store
* A user is capable of seeing past rounds
* A user is capable of copying and pasting links (though not in the hosted demo)

## Limitations
The project has the following known limitations:

* It is not styled (Semantic UI is used to quickly provide a UI toolkit)
* The users location is not currently accessed from the browser

## Technical Debt
* There are no unit tests
* The dependency between entities in the store could use some finessing
* Components are not as pure as they could be, a composition focused refactor could improve readability and reduce testing effort
* There are some linitng issues

## API Design
The project has been setup with stubbed API libraries under `src/api`.

This libraries return faked data and satisfy the following API. It might be advantageous to consider usign GraphQL if available
so that related types can be more easily recovered.

No authentication, authorization or user signup / sign is implemented here. It is recomeded implement OAuth / OIDC to secure access to resources via Bearer JWT tokens.

All models used by the application can be found in `/src/store/{entity type}/models`

### Bar Api
The bar model is as follows:

```
{
  id: int,
  name: string,
  lat: float,
  long: float,
  distance: int, // Distance in meters form given lat/long
  products: Products[], // Available Products and prices at the bar
  imageUrl: string,
}
```

The `qty` of the product model is not expected to be satisfied by these responses.

#### GET: bars/:id
Returns a single bar object based on the provided id. Distance is not set.

#### GET: bars ? ids=id[] & limit=10
Retruns multiple bars as specified by the id's in the array. Distance is not set.

#### GET: bars ? lat=float & long=float & limit=10
Returns the closest bars to lat/long along with their calculated distance.

### Round Api
The round model is as follows:
```
  {
   id: int
   barId: int
   timestamp: timestamp //Miliseconds
   products: Product[] // Ordered products
  }
```
The products `name` is not expected to be set by this response - this supports different naming between bars if required. Removing this would simplfy code slightly as these objects would not need to be merged.

#### GET: rounds/:id
Get a single round object based on the ID

#### GET: rounds ? userId=int
Get all rounds for a given User ID.

#### PUT: rounds
Creates a new round using a Round object as the payload.

This is expected to return the original request payload along with a new UID for the round id.

#### Product Model
Presently the bar object is expected to return all products available for the bar, as such no API has been faked for this.

See `Notes` below as this may not be the best route depending on the data set.

The product model is as follows:
```
{
  id: int
  name: string // Set by the bar
  imageUrl: string
  price: double // Set by the bar when ordering and by the round once the order is confirmed
  qty: int // Set by the round
}
```

## Notes
* There is a trade off in how products are stored / retrieved
 * As a part of each Bar object
   * Unused products are not stored in memory or requested
   * Products are likely duplicated across bars and may be stored / requested multiple times
   * Bar objects have increased payload sizes
   * Store complexity is slightly reduced
 * As separate element in the store
   * The entire product catalog for application is stored in memory
   * First load time is increased as this is likely a weighty payload
   * Catalog information (eg name, image url) is not duplicated between bars
   * Store complexity is slightly increased
 * Presently products are loaded as a part of each Bar object, profiling the final data set would be useful to improve optimization
