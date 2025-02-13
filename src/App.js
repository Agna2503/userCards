import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Sample API
      .then((response) => response.json())
      .then(
        (data) => setUsers(data.map((user) => ({ ...user, liked: false }))) // Add liked property
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Update user details (edit feature)
  const updateUser = (id, updatedData) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user
      )
    );
  };

  // Toggle like/unlike
  const toggleLike = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, liked: !user.liked } : user
      )
    );
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="container mt-4 d-flex flex-wrap gap-3">
      {users.map((user) => (
        <CardComponent
          key={user.id}
          user={user}
          updateUser={updateUser}
          toggleLike={toggleLike}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
}

export default App;
