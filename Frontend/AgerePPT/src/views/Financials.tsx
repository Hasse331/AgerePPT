import ToolComp from "../components/toolComp";

export default function Reports() {
  const title = "Budgeting tool";
  const description =
    "Simple budgeting tool to plan you finances. The most basic, but also the most important tool.";

  const title2 = "Income statement";
  const description2 =
    "Track your income and expenses and make predictions about your finances.";

  const title3 = "Balance sheet";
  const description3 =
    "Track your balance sheet, the amount of your assets and liabilities, and keep track of the amount of your savings and investments.";

  const title4 = "Cashflow statement";
  const description4 =
    "Understand your cash flows related to your personal operational finances, investments, and financial activities.";

  return (
    <>
      <h1>Finance</h1>
      <ToolComp title={title} description={description} />
      <ToolComp title={title2} description={description2} />
      <ToolComp title={title3} description={description3} />
      <ToolComp title={title4} description={description4} />
    </>
  );
}
