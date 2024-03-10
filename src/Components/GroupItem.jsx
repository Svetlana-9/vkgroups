import { SimpleCell, Avatar } from "@vkontakte/vkui";
import React from "react";
import Friends from "./Friends";

export default function GroupItem({ group, index }) {
  const [friends_list, setFriends_list] = React.useState([]);

  function handleClick(list) {
    if (list) {
      setFriends_list(<Friends friends={list} />);
    }
  }

  return (
    <SimpleCell
      key={index}
      before={
        <Avatar
          style={{ background: group.avatar_color }}
          gradientColor={"custom"}
          size={100}
          onClick={() => {
            handleClick(group.friends);
          }}
        />
      }
    >
      <h1> {group.name} </h1>
      <span>
        {group.closed ? "Закрытая" : "Открытая"} <br />
        Количество подписчиков: {group.members_count} <br />
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleClick(group.friends);
          }}
        >
          Количество друзей: {group.friends ? group.friends.length : 0}
          {friends_list}
        </span>
      </span>
    </SimpleCell>
  );
}
