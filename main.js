const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputPrice = async () => {
  return new Promise((done) => {
    readline.question('What is the price of the flat? \n', price => {
      done(+price);
    });
  });
}

const inputLabel = async () => {
  return new Promise(done => {
    readline.question('What is the energy label? \n', label => {
      label = label.toUpperCase();

      // If label is unknown, we assume that it is G
      if(!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(label)) {
        label = 'G';
      }

      done(label.toUpperCase());
    });
  });
}

const inputTravelTicket = async () => {
  return new Promise(done => {
    readline.question('For how many zones do you need to buy ticket? (0 = no need for ticket, 7 = full city ticket) \n', travelTicket => {
      travelTicket = +travelTicket;

      // if ticket is unknown we assume that it is full city ticket
      if(![0, 1, 2, 3, 4, 5, 6].includes(travelTicket)) {
        travelTicket = 'Full city';
      }

      done(travelTicket);
    });
  });
}

const inputMoveInDate = async () => {
  return new Promise(done => {
    readline.question('How many months do you have to move in (You have 2 months notice period) \n', moveInMonths => {
      done(+moveInMonths);
    });
  });
}

const calculateMovingCost = (monthsLength) => {
  const pricePerMonth = 1900;
  const paidMonths = Math.max(0, 2 - monthsLength);

  return pricePerMonth * paidMonths;
}

const calculateLabelPrice = (label) => {
  const pricesPerLabel = {
    'A': 99,
    'B': 112,
    'C': 130,
    'D': 156,
    'E': 242,
    'F': 260,
    'G': 307
  };

  return pricesPerLabel[label];
}

const calculateTravelPrice = (travelTicket) => {
  const pricesPerZonesPerYear = {
    0: 0,
    1: 590,
    2: 960,
    3: 1420,
    4: 1890,
    5: 2360,
    6: 2840,
    'Full city': 3354
  };

  return Math.round(pricesPerZonesPerYear[travelTicket] / 12);
}

const main = async () => {
  const price = await inputPrice();
  const label = await inputLabel();
  const travelTicket = await inputTravelTicket();
  const monthsUntilMoveIn = await inputMoveInDate();

  const labelPrice = calculateLabelPrice(label);
  const travelPrice = calculateTravelPrice(travelTicket);
  const moveInPrice = calculateMovingCost(monthsUntilMoveIn);
  const priceForServices = 100; // Ziggo, water, trash etc.

  const totalPrice = price + labelPrice + travelPrice + moveInPrice + priceForServices;

  console.log(`
    Rent price: ${price} euros,
    Enegy label: ${label} (${labelPrice} euros),
    Travel ticket: ${travelTicket}${travelTicket === 'Full city' ? '' : ' zones'} (${travelPrice} euros),
    Services price: ${priceForServices},
    MoveIn price: ${moveInPrice},
    Total price: ${Math.round(totalPrice)} euros
  `);

  readline.close();
};

main();
