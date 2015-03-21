$(function () {
  
  // List all the names of family members
  var list_of_names = $("<ul>");

  /**
   * Recursively looks through data_to_traverse
   *   and creates a <li> element with the content
   *   of each name property of each object
   * @param  {Object of Objects} data_to_traverse
   * @return {Array of Jquery elements}
   */
  function getNamesRecursively ( data_to_traverse ) {
    var li_elements = [];

    return li_elements;
  }

  // append answer to dom
  $("#names").append(list_of_names);
  

  
  /**
   * Recursively counts through deep_data_structure
   *   including each objects children
   *   adding each "age" property
   * @param  {Object of Objects} deep_data_structure
   * @return {Number}
   */
  function getSumOfAges ( deep_data_structure ) {
    var sum = 0;

    return sum;
  }

  // Print the sum of all family member ages
  var total_age = getSumOfAges( family_tree );
  
  // append answer to dom
  $("#total_age").html(total_age);

})();