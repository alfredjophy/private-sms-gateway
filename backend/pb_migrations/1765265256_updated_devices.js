/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2153001328")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_YpNGcO9UD0` ON `devices` (`owner`)",
      "CREATE UNIQUE INDEX `idx_PqbmLLlKS5` ON `devices` (`hash`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2153001328")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_YpNGcO9UD0` ON `devices` (`owner`)"
    ]
  }, collection)

  return app.save(collection)
})
