The CEO has decided that we need to pivot towards the fast-moving field of social beverage productivity planning apps. We're not sure what this means, either, but he has given us the following two use cases:

* As a person with short-term memory problems, in a pub, I want to build a list of drinks orders from my friends at the table, so that I don't forget half of them on the way to the bar.
* As a person with poor financial planning skills, after an evening at a pub, I want to see how much I've spent on rounds, so that I know if I can still afford to take my parents to dinner at Café Saint Honoré on Friday.

What we think he means is this: some kind of web app you can use on your phone in a pub. You should be able choose the pub you're in (search, or select from a list). When you have selected the pub, you should be able to see what drinks are available at the bar, and their prices. You should be able to compose a list of drinks orders from the available selections, and take this list to the bar with you so you can present it to the bartender. At the end of the evening, you should be able to see a summary of how much you have spent on your rounds.

During an initial brainstorming session the dev team came up with this rough schema for the back-end data:

```sql
CREATE TABLE bars (
	id SERIAL NOT NULL PRIMARY KEY,
	name TEXT NOT NULL,
	lat DECIMAL(18,4) NULL,
	long DECIMAL(18,4) NULL,
	image_url TEXT NULL
)

CREATE TABLE products (
	id SERIAL NOT NULL PRIMARY KEY,
	name text NOT NULL,
	image_url TEXT NULL
)

CREATE TABLE current_prices (
	bar_id INT NOT NULL,
	product_id INT NOT NULL,
	current_price DECIMAL(12,2) NOT NULL
)

CREATE TABLE rounds (
	id SERIAL NOT NULL PRIMARY KEY,
	bar_id INT NOT NULL
	ordered_at TIMESTAMP NOT NULL
)

CREATE TABLE ordered_beverages (
	id SERIAL NOT NULL PRIMARY KEY,
	round_id INT NOT NULL,
	product_id INT NOT NULL,
	actual_price DECIMAL(18,4) NOT NULL
)
```

The back-end will be offered as a JSON API. However, after getting this far, the discussion spiralled out of control into a debate about Postgres vs MongoDB vs Cassandra, and whether this is the right moment to start migrating all our legacy code to Haskell. Our chief architect is still drawing diagrams. Nonetheless, the CEO has expressed his desire to demo something at the next board meeting. As our star front-end developer, we need you to start work on a prototype.

Given a time scale of about 5-8 hours, and using whatever tools and libraries you think are appropriate, we would like you to do the following:

* Build a clickable prototype. Use fake data, because the real API isn't available yet. (The clickable prototype should be functional, but it doesn't have to be beautiful. The CEO will probably want to change all the colours later anyway.)
* Tell us what your requirements are for the API to deliver your magical vision.
