var recipes = {steak: "butter"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  console.log(newObj)
  delete newObj.key
  console.log(newObj)
  return newObj
}

console.log(deleteFromObjectByKey(recipes, 'steak'))
