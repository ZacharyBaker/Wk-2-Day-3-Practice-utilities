/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    if (n===undefined){
      return array[0];
    }
    else {
      return array.slice(0, n)
    }
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    if (n===undefined){
      return array[array.length -1];
    } else if (n > array.length){
      return array;
    } else {
      return array.slice(array.length - n);
   }
 }

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)){
      collection.forEach(iterator);
    } else {
    for (var prop in collection){
      iterator(collection[prop], prop, collection);
    }
  }
 }

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    for (var i = 0; i < array.length; i++){
      if (array[i]===target){
        return i;
      } 
      }
   return -1;
  };
// why the freak can't i use this |return array.indexOf(target);|



  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, iterator) {
    var arrTruth = [];
    for (var i = 0; i < collection.length; i++){
      if (iterator(collection[i])){
        arrTruth.push(collection[i]);
      }
    }
    return arrTruth;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, iterator) {
    var arrFalse = [];
    for (var i = 0; i < collection.length; i++){
      if (!iterator(collection[i])){
        arrFalse.push(collection[i]);
      }
    }
    return arrFalse;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++){
      if (newArr.indexOf(array[i]) === -1){
        newArr.push(array[i]);
      }
    } 
    return newArr;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
      var arr = [];
      for (var i = 0; i < array.length; i++){
        arr.push(iterator(array[i]));
      }
      return arr;
  };

  // Takes an array of objects and returns an array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var propOfAll = [];
    for (var i = 0; i < array.length; i++){
      var currentObj = array[i];
      propOfAll.push(currentObj[propertyName]);
    }
    return propOfAll;
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
   for (var i = 0; i < list.length; i++){
   var currentArr = list[i];
    //var method = currArr[methodName] || methodName;
    //method.apply(currentArr, args);    
    
 
     if (typeof methodName === 'string'){
       currentArr[methodName](args);
     } else {
      methodName.apply(currentArr, args);
    }
   }
    return list;
  }

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
    var result;
    var previousValue;
    if (initialValue){
      previousValue = iterator(initialValue, collection[0]);
    } else {
      previousValue = collection[0];
    }
    for (var i = 0; i < collection.length - 1; i++){
      result = iterator(previousValue, collection[i+1]);
      previousValue = result;
    }
    return result;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++){
        if (collection[i] === target){
          return true;
        }
      }return false;
    } else {
      for (var prop in collection){
        if (collection[prop] === target){
          return true;
        }
      }
    }
    return false;
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
   var allTrue = true;
    if (iterator !== undefined){
      for (var i = 0; i < collection.length; i++){
        if (!iterator(collection[i])){
          allTrue = false;
        }
      }
    } return allTrue;
  };
    
  
  
  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    var counter = 0;
    var result;
    iterator = iterator || function(number){return number % 2 === 0};
   var arrFalse = [0, false, '', NaN, undefined, null];
   for (var i = 0; i < collection.length; i++){
     if (arrFalse.indexOf(collection[i]) > -1){
       counter++;
     } 
    if (counter === collection.length){
     return false;
     }
   } 
    for (var j = 0; j < collection.length; j++){
      if (iterator(collection[j])){
        return true;
      } 
      
    }
    return false;
    
  };
  //      iterator = iterator || function(number){return number % 2 === 0;};  // default iterator
  //   var counter = 0;
  //   var falsey = [null, 0, '', false, NaN, undefined];
  //   for(var i=0; i<collection.length; i++){
  //     if(falsey.indexOf(collection[i])>-1){
  //       counter++;
  //     }
  //   }
  //   if(counter===collection.length){
  //     return false;
  //   }
  //   // now check iterator
  //   for(var j=0; j<collection.length; j++){
  //     if(iterator(collection[j])){
  //       return true;
  //     }
  //   }
  //   return false;
  // } ;
  


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
    var newObj = {};
    
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    
    var executed = false;
    return function() {
      if (!executed){
        executed = true;
      }
    }
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
    
  };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

}).call(this);
