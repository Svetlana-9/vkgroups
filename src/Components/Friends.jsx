export default function Friends({ friends }) {
  let friends_list = [];

  if (friends) {
    friends_list = friends.map((friend, index) => {
      return (
        <li key={index}>
          {friend.first_name} {friend.last_name}
        </li>
      );
    });
  }

  return <ul>{friends_list}</ul>;
}
