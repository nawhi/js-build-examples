import { greet } from "./greet";
import translations from "./translations.json";

document.onload = async () => {
  const response = await fetch("/api/identity");
  const { firstName, lastName, language } = await response.json();
  const translatedGreeting = translations[language];
  greet(translatedGreeting, firstName, lastName);
};
