export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita, // shorthand syntax capita: capita = 'capita,'
  };

  return budget;
}
