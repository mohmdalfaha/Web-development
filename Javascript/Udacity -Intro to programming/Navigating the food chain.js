/*



TESTED & WELL UNDERSTOOD HOW TO USE TERNARY OPERATPR EFFECTIVELY !! :)

NOTE:- Approach-1 is better to use in similar situation





 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

 /*

   TIP: Make sure to test your code with different values. For example,

        If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console.

 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = false;

// approach -1 (Recommeded)

var category = eatsAnimals && eatsPlants ? "omnivore":eatsPlants ?
 "herbivore":eatsAnimals? "carnivore":undefined;






/*

Approach-2 (Not recommended)

var category = eatsPlants ? "herbivore":"carnivore"; 
var category = eatsAnimals? "carnivore":"herbivore";
var category = eatsAnimals &&  eatsPlants? "carnivore":"undefined";


*/

// approach -1 (Recommeded)


console.log(category);