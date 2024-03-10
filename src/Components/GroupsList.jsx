import { Group, Header } from "@vkontakte/vkui";
import GroupItem from "./GroupItem";

export default function GroupsList({
  groups,
  selected_option_type,
  selected_option_color,
  selected_option_friend,
}) {
  let result = [];

  if (groups) {
    result = groups.map((group, index) => {
      if (
        group.closed.toString() === selected_option_type ||
        !selected_option_type
      ) {
        if (
          group.avatar_color === selected_option_color ||
          !selected_option_color ||
          (!group.avatar_color && selected_option_color === "none")
        ) {
          if (
            (selected_option_friend === "yes" && group.friends !== undefined) ||
            (selected_option_friend === "no" && group.friends === undefined) ||
            !selected_option_friend
          ) {
            return <GroupItem group={group} index={index} key={index}/>;
          } else return null;
        } else return null;
      } else return null;
    });
  }

  return (
    <Group header={<Header mode="secondary">Группы</Header>}>{result}</Group>
  );
}
