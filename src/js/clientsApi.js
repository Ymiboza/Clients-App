export const getClients = async () => {
  try {
    const response = await fetch(
        "https://morning-falls-14858.herokuapp.com/api/clients",
        {
          method: "GET",
        }
      ),
      result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const sendClientData = async (client, method, id = null) => {
  try {
    const response = await fetch(
      `https://morning-falls-14858.herokuapp.com/api/clients/${
        method === "POST" ? "" : id
      }`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method,
        body: JSON.stringify(client),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteClientItem = async (id) => {
  try {
    const response = await fetch(
      `https://morning-falls-14858.herokuapp.com/api/clients/${id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const findClient = async (value) => {
  try {
    const response = await fetch(
        `https://morning-falls-14858.herokuapp.com/api/clients?search=${value}`,
        {
          method: "GET",
        }
      ),
      result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
