import TaskBtns from "./TaskBtns";

export default function TaskListItem(props) {
  let { id, email, password, proxy, site, status } = props.task;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>{id}</td>
      <td style={{ textAlign: "center" }}>{email}</td>
      <td style={{ textAlign: "center" }}>{password}</td>
      <td style={{ textAlign: "center" }}>{proxy}</td>
      <td style={{ textAlign: "center" }}>{site}</td>
      <td style={{ textAlign: "center" }}>{status}</td>
      <td style={{ textAlign: "center" }}>
        <TaskBtns id={id} />
      </td>
    </tr>
  );
}
