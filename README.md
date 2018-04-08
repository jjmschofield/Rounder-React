# Round-React

## Notes
* There is a trade off in how products are stored / retrieved
** As a part of each Bar object
*** Unused products are not stored in memory or requested
*** Products are likely duplicated across bars and may be stored / requested multiple times
*** Bar objects have increased payload sizes
*** Store complexity is slightly reduced
** As separate element in the store
*** The entire product catalog for application is stored in memory
*** First load time is increased as this is likely a weighty payload
*** Catalog information (eg name, image url) is not duplicated between bars
*** Store complexity is slightly increased
