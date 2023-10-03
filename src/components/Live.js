import React from "react";
import { useState } from "react";

export default function Live() {
  const [person, setPerson] = useState({
    name: "",
    artwork: {
      title: "",
      city: "",
      image:
        "https://www.google.com/?imgurl=https%3A%2F%2Fimgcorp.co.uk%2Foutside%2Fwp-content%2Fuploads%2FIMG-UK-London.jpg&tbnid=6AgtTuYiN2wVCM&vet=12ahUKEwi4qYuDxMCBAxURIhAIHXxYDYcQMygGegQIARBZ..i&imgrefurl=https%3A%2F%2Fimgcorp.co.uk%2Fcontact-us%2F&docid=VU5xaAyMO7QSHM&w=450&h=340&q=img%20london&ved=2ahUKEwi4qYuDxMCBAxURIhAIHXxYDYcQMygGegQIARBZ",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImgChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>

      <label>
        title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>

      <label>
        city:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>

      <label>
        image:
        <input value={person.artwork.image} onChange={handleImgChange} />
      </label>

      <p>
        <i>{person.artwork.title}</i>
        {"by"}
        {person.name}
        <br />
        (located in Great Britain{person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
