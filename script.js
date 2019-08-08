import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 300,
  duration: "30s"
};

export default function () {
  const randomListing = Math.floor(Math.random() * (10000000 - 1) + 1);
  http.get(`http://localhost:3003/api/${randomListing}/images`);

  sleep(1);
};