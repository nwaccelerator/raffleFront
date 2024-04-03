const NODE_URL = process.env.REACT_APP_NODE_URL;

export async function createRaffle(args) {
  try {
    const response = await fetch(`${NODE_URL}/api/raffles`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function getAllRaffles() {
  try {
    const response = await fetch(`${NODE_URL}/api/raffles`, {
      method: "GET",
      mode: "cors",
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function getPartById(id) {
  try {
    const response = await fetch(`${NODE_URL}/api/raffles/${id}/participants`, {
      method: "GET",
      mode: "cors",
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function getRafflePart(id) {
  try {
    const response = await fetch(`${NODE_URL}/api/raffles/${id}/participants`, {
      method: "GET",
      mode: "cors",
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function getRafWinner(id) {
  try {
    const response = await fetch(`${NODE_URL}/api/raffles/${id}/winner`, {
      method: "GET",
      mode: "cors",
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function addNewParticipant(args, id) {
  if (args.phone === "") delete args["phone"];
  try {
    const response = await fetch(`${NODE_URL}/api/raffles/${id}/participants`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function drawRaffle(secret_token, id) {
  try {
    const response = await fetch(`${NODE_URL}/api/raffles/${id}/winner`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secret_token }),
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}
