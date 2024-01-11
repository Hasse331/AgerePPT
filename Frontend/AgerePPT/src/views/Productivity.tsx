import ToolComp from "../components/toolComp";

export default function Productivity() {
  // TASK: DRY FIX

  const title = "Simple Project Manager (SPM)";
  const description =
    "Manage your projects and make organized plans, project notes, task and priority lists.";

  const title2 = "Worktime tracker";
  const description2 =
    "Track how many hours you have used for each of your projects or in total.";

  const title3 = "Daily schedule planner";
  const description3 =
    "Use the best methods, like time blocking and pomodoro to build optimal daily schedule.";

  return (
    <>
      <h1>Productivity</h1>
      <ToolComp title={title} description={description} />
      <ToolComp title={title2} description={description2} />
      <ToolComp title={title3} description={description3} />
    </>
  );
}
