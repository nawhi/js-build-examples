import type { User } from "./types";

fetch("/api/user")
  .then((res) => res.json())
  .then(({ firstName, lastName }: User) =>
    console.log(`Hello, ${firstName} ${lastName}`)
  );
