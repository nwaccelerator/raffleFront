const NODE_URL = process.env.REACT_APP_NODE_URL;

export async function createRaffle(args) {
  try {
    const response = await fetch(`${NODE_URL}/raffles`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    });
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}

export async function getAllRaffles() {
  try {
    const response = await fetch(`${NODE_URL}/raffles`, {
      method: "GET",
      mode: "cors",
    });
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
