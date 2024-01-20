interface personalData{
    h: number;
    w: number;
}

const parseArguments = (args: string[]): personalData => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        h: Number(args[2]),
        w: Number(args[3])
      }
    } else {
      throw new Error('Provided values were not valid, provide both height[cm] and weigth[kg] as numbers');
    }
  }

const calculator = (height: number, weight: number) => {

    //BMI formula is mass/height^2
    if(height == 0 ){
        throw new Error('Can\'t divide by 0!');
    }

    let bmi = weight/(height/100^2);

    if(bmi<=18.4){
        console.log("Underweight");
    }else if(bmi>18.4 && bmi<=24.9) {
        console.log("Normal (healthy weight)");
    }else if(bmi>25 && bmi<=39.9){
        console.log("Overweight");
    }else{
        console.log("Obese");
    }

}

try {
    const { h, w } = parseArguments(process.argv);
    calculator(h, w);
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}