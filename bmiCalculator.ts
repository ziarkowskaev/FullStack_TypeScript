const calculator = (height: number, weight: number) : string => {

    //BMI formula is mass/height^2
    if(height == 0 ){
        throw new Error('Can\'t divide by 0!');
    }

    let bmi = weight/(height/100^2);

    if(bmi<=18.4){
        return("Underweight")
    }else if(bmi>18.4 && bmi<=24.9) {
        return("Normal (healthy weight)")
    }else if(bmi>25 && bmi<=39.9){
        return("Overweight")
    }else{
        return("Obese")
    }

}

try {
  console.log(calculator(180, 74));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}