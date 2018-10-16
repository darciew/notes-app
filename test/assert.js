var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    console.log('%c Test passed! Woohoo!', "color:green");
  },

  isString: function(string) {
    if(typeof string !== typeof "" || typeof string !== typeof '') {
      throw new Error(string + ", should be a string!");
    } else {
      console.log('%c Test passed! Woohoo!', "color:green");
    }
  }
}
