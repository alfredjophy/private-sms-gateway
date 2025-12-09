/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2409499253")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_RyJtaKaoyl` ON `jobs` (`status`)",
      "CREATE UNIQUE INDEX `idx_aNyT39h0JB` ON `jobs` (`message`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2605467279",
    "hidden": false,
    "id": "relation3065852031",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "message",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2409499253")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_RyJtaKaoyl` ON `jobs` (`status`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation3065852031")

  return app.save(collection)
})
