const userInput = async (readline, question: string): Promise<string> => {
  return new Promise((done) => {
    readline.question(`${question} \n`, (answer) => {
      done(answer);
    });
  });
};

const getInputs = async (readline) => {
  const price = await userInput(readline, "What is the price of the flat?");
  const label = await userInput(readline, "What is the energy label?");
  const travelTicketMisha = await userInput(
    readline,
    "For how many zones do you need to buy ticket for Misha? (0 = no need for ticket, 7 = full city ticket)"
  );
  const travelTicketNataliia = await userInput(
    readline,
    "For how many zones do you need to buy ticket for Nataliia? (0 = no need for ticket, 7 = full city ticket)"
  );
  const daysBeforeMoveIn = await userInput(
    readline,
    "How many days we have before moving in? (7 days for signing of the contract included)"
  );

  return {
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia,
    daysBeforeMoveIn,
  };
};

export default getInputs;