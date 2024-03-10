import { FormLayoutGroup, FormItem, CustomSelect } from "@vkontakte/vkui";
import React from "react";
import GroupsList from "./GroupsList";

export default function Filters({ groups }) {
  const [selected_option_type, setSelected_option_type] = React.useState();
  const [selected_option_color, setSelected_option_color] = React.useState();
  const [selected_option_friend, setSelected_option_friend] = React.useState();

  const group_type_selects = [
    { value: "false", label: "Открытая" },
    { value: "true", label: "Закрытая" },
  ];

  let color_selects = [];
  if (groups) {
    color_selects = groups.map((group) => {
      if (!group.avatar_color) {
        return { value: "none", label: "none" };
      }
      return { value: group.avatar_color, label: group.avatar_color };
    });

    color_selects = color_selects.filter(
      (obj, idx, arr) => idx === arr.findIndex((t) => t.label === obj.label)
    );
  }

  const friend_selects = [
    { value: "yes", label: "Да" },
    { value: "no", label: "Нет" },
  ];

  return (
    <>
      <FormLayoutGroup mode="horizontal">
        <FormItem top="Тип приватности" htmlFor="group_type_selects_id">
          <CustomSelect
            id="group_type_selects_id"
            placeholder="Не выбран"
            options={group_type_selects}
            allowClearButton
            onChange={(event) => {
              setSelected_option_type(event.target.value);
            }}
          />
        </FormItem>

        <FormItem top="Цвет аватарки" htmlFor="color_selects_id">
          <CustomSelect
            id="color_selects_id"
            placeholder="Не выбран"
            options={color_selects}
            allowClearButton
            onChange={(event) => {
              setSelected_option_color(event.target.value);
            }}
          />
        </FormItem>

        <FormItem top="Наличие друзей в группе" htmlFor="friend_selects_id">
          <CustomSelect
            id="friend_selects_id"
            placeholder="Не выбран"
            options={friend_selects}
            allowClearButton
            onChange={(event) => {
              setSelected_option_friend(event.target.value);
            }}
          />
        </FormItem>
      </FormLayoutGroup>
      
      <GroupsList
        groups={groups}
        selected_option_type={selected_option_type}
        selected_option_color={selected_option_color}
        selected_option_friend={selected_option_friend}
      />
    </>
  );
}
