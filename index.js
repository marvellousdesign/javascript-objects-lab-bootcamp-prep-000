var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

/*

  2) Objects updateObjectWithKeyAndValue(object, key, value) it does not modify the original object, but rather returns a clone with the new data:
     ReferenceError: updateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:21:7)

  3) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and
returns the entire updated object:
     ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:31:14)

  4) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:46:20)

  5) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:54:7)

  6) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:62:20)

  7) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:69:20)

      */
