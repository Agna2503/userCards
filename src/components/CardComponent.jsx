import { useState } from "react";
import Card from "react-bootstrap/Card";
import EditDetails from "./EditDetails";
import "../styles/card.scss";

function CardComponent({ user, updateUser, toggleLike, deleteUser }) {
  const [show, setShow] = useState(false);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
      />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <i className="fa-regular fa-envelope"></i> {user.email}
        </Card.Text>
        <Card.Text>
          <i className="fa-solid fa-phone"></i> {user.phone}
        </Card.Text>
        <Card.Text>
          <i className="fa-solid fa-globe"></i> {user.website}
        </Card.Text>
      </Card.Body>
      <Card.Body className="btn--">
        {/* Like Button */}
        <div className="btn--btn-" onClick={() => toggleLike(user.id)}>
          <i
            className={
              user.liked
                ? "fa-solid fa-heart text-danger"
                : "fa-regular fa-heart"
            }
          ></i>
        </div>

        {/* Edit Button */}
        <div className="btn--btn-" onClick={() => setShow(true)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </div>

        {/* Delete Button */}
        <div className="btn--btn-" onClick={() => deleteUser(user.id)}>
          <i className="fa-solid fa-trash text-danger"></i>
        </div>
      </Card.Body>

      {/* Edit Modal */}
      <EditDetails
        show={show}
        setShow={setShow}
        user={user}
        updateUser={updateUser}
      />
    </Card>
  );
}

export default CardComponent;
