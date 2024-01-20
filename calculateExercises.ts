import { isNotNumber } from "./utils";

interface DataofWeek { 
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }


  const parseArguments2 = (args: string[]): number[] => {

    //pass at least one day so at least 4 arguments
    if (args.length < 4) throw new Error('Not enough arguments, include at least one day and target value');
    if (args.length > 17) throw new Error('Too many arguments, maximum of 14 days allowed');
    
    for(let i=2; i<args.length; i++){
      if(isNotNumber(args[i])){
        throw new Error('All arguments need to be numbers');
      }
    }

    return args.slice(2).map(arg => Number(arg))
  }

const calculatorExercise = (inputs: number[]): DataofWeek => {

    let weekExercies = inputs.slice(1);
    let personalTarget = inputs[0];
    let sum = weekExercies.reduce((sum, current) => sum + current, 0);
    let days = weekExercies.length;
    let workDays = weekExercies.filter((day) => day!= 0).length;
    let avg = sum/days;

    //rating is 1 if avg of hours is less than target
    //2 if it meets target when number is rounded up
    //3 if the number of hours exceeds the target

    if(Math.ceil(avg) < personalTarget){
        return {
            periodLength: days,
            trainingDays: workDays,
            success: false,
            rating: 1,
            ratingDescription: "Didnt reach the target number of hours",
            target: personalTarget,
            average: avg
        }
    }else if(Math.ceil(avg)==personalTarget) {
        return {
            periodLength: days,
            trainingDays: workDays,
            success: false,
            rating: 2,
            ratingDescription: "Target working hours was reached or is very close",
            target: personalTarget,
            average: avg
        }
    }else{
        return {
            periodLength: days,
            trainingDays: workDays,
            success: false,
            rating: 3,
            ratingDescription: "Target working hours was exceeded",
            target: personalTarget,
            average: avg
        }
    }
}

try {
  const trainings =parseArguments2 (process.argv)
  console.log(calculatorExercise(trainings));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}