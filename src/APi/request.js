import axios from "axios";
axios.defaults.withCredentials = false;


export async function getPackageData(id, idOrder) {
  const req = await axios.post("http://localhost:3005/package", {
    id: id,
    idOrder: idOrder,
  });

   const productsjson = JSON.parse(req.data[0].products)
    return productsjson;
}

export async function getUsersData() {
  const req = await axios.get("http://localhost:3005/users/");
  const usersData = await req.data.results;
  return usersData;
}

export async function registerUser(email, displayName, id) {
  const request = await axios.post("http://localhost:3005/users/register", {
    email: email,
    displayName: displayName,
    id: id,
  });
  const response = await request.data.results;
  return response;
}


export async function createUser(id, displayName) {
  const request = await axios.post("http://localhost:3005/users/add", {
    id: id,
    displayName: displayName,
  });
  return request;
}

export async function createOrder(orderId, id, products) {
  const request = await axios.post("http://localhost:3005/package/add", {
    orderId: orderId,
    id: id,
    products: products,
  });
  const response = await request.data.results;
  return response;
}
