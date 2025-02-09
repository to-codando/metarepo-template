type Persona = {
  name: string;
  email: string;
};
export const fn = (): Persona => {
  const name = "Rodrigo";
  const email = "r@gmail.com";
  return {
    name,
    email,
  };
};
