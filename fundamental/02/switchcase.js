const grade = 80;


   switch(true) {
     case grade >= 80: //if( true == grade >= 80 ) // true
        console.log("Excellent");
        break;
     case grade < 80: //if(true == grade < 80 ) // false
        console.log("good job");
        break;
    default:
            console.log("default case");
            break;
  }

  let fruit = "Mangoes"

  switch(fruit) {
    case "Oranges":
        console.log("Oranges are $0.69 a pound.")
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and Papayas are 2.79 a pound")
        break;
    default:
        console.log(`Sorry, we are out of ${fruit}`);
  }