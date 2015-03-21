var util = require('util');
var family_tree = require('./family_tree');

/**
 * Recursively traverses element,
 *   add element's name property to names_array
 *   if the element has_children, 
 *     loop through each child
 *     call getNamesRecursively again,
 *     passing in that child and the names_array
 * finally, return the names_array
 *   that contains all the names in the family
 *   
 * @param  {Object of Objects} element
 * @param  {Array of Strings} names_array
 * @return {Array of Strings}
 */
function getNamesRecursively ( element, names_array ) {
  





  return names_array;
}

// invoke recursive function, pass in empty array for 'names_array'
var list_of_names = getNamesRecursively( family_tree.root, [] );

// append answer to dom
util.puts( "list of names:", list_of_names );



/**
 * Recursively traverses element,
 *   initialize a temporary total_age variable
 *     set it to the value of element's age
 *   if the element has_children, 
 *     loop through each child
 *     increase total_age by calling getSumOfAges again,
 *     passing in that child
 * finally, return the value of total_age
 * 
 * @param  {Object of Objects} element
 * @return {Number}
 */
function getSumOfAges ( element ) {





  return 0; 
}

// Print the sum of all family member ages
var sum_of_ages = getSumOfAges( family_tree.root );

// append answer to dom
util.puts("sum_of_ages:", sum_of_ages);
