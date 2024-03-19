import {
  PrismaClient,
  PaymentCardBrand,
  PaymentCurrency,
  PaymentStatus,
} from "@prisma/client";
const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getRandomEnumValue<T extends Record<string, any>>(
  enumObj: T,
): T[keyof T] {
  const values = Object.keys(enumObj)
    .filter((key) => isNaN(Number(key)))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .map((key) => enumObj[key]);
  const randomIndex = Math.floor(Math.random() * values.length);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return values[randomIndex];
}

function generateRandomPaymentData() {
  const descriptions = [
    "Coffee purchase",
    "Bookstore order",
    "Online software subscription",
    "Concert ticket",
    "Electric bill payment",
    "Donation",
    "Gym membership",
    "Flight ticket",
  ];

  const description =
    descriptions[Math.floor(Math.random() * descriptions.length)] ??
    "Some random payment";
  const status = getRandomEnumValue(PaymentStatus);
  const amount = Math.floor(Math.random() * 1000) * 100;
  const currency = getRandomEnumValue(PaymentCurrency);
  const cardBrand = getRandomEnumValue(PaymentCardBrand);

  return { description, status, amount, currency, cardBrand };
}

async function main() {
  for (let i = 0; i < 1000; i++) {
    const payment = await prisma.payment.create({
      data: generateRandomPaymentData(),
    });

    console.log({ payment });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
