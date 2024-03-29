
//          100 days of coding challenge ( DAY 15 )

//   Question 01    
function make_great(magicians: string[]): string[]{
    let greatMagicians: string[] =[];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + "the great"); 
    }
    return greatMagicians;
}
let magicians: string[]=["David ","Juhi Chawala ","Lance brown "];
let greatMagicians: string[] = make_great(magicians);
console.log(magicians);
console.log(greatMagicians);
//   Question 02
function make_sandwich(...items:string[]){
  console.log(`Making a sandwich with:${items.join(`, `)}.`);
}
make_sandwich("Veg","Cheese");
make_sandwich("Chicken","Club","Cuban");
make_sandwich("Ham","Peanut Butter","Itallian","Sweet")
//   Question 03
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
  let car = { manufacturer, model };
  options.forEach(([key, value]) => car[key] = value);
  return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Suzuki", "Mehran", ["color", "Gray"], ["sunroof", false]));