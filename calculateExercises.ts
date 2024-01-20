interface DataofWeek { 
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }

const calculatorExercise = (weekExercies: number[], personalTarget: number): DataofWeek => {

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
            ratingDescription: "Target working hours was reached",
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
  console.log(calculatorExercise([3, 0, 2, 4.5, 0, 3, 1], 2));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}