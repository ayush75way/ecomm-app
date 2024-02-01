import { showToast } from "../utils/helpers";

type User = {
  id: string;
  email: string;
  password: string;
  cart: [];
  orders: [];
};

type Props = {
  userId: string;
  updatedUserData: User;
  message: string;
};

export const saveUserToDB = (props: Props) => {
  const { userId, updatedUserData, message } = props;
  fetch(`http://10.0.2.2:3000/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUserData),
  })
    .then((res) => res.json())
    .then((data) => {
      showToast(message);
    })
    .catch((err) => console.log(err));
};
