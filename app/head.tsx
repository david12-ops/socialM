'use client'
import { usePathname } from "next/navigation";

const getTitleFromPath = (pathName: string | null) => {
  const pathTitles: { [key: string]: string } = {
    "/": "Domů",
    "/subscriptions": "Odběry",
    "/history": "Historie",
    "/yoursVideos": "Vaše videa",
    "/favoritesVideos": "Oblíbená videa",
    "/changePassword": "Změna hesla",
    "/changeEmail": "Změna emailu",
    "/login": "Přihlásit se",
  };

  return pathTitles[pathName as string] || "socialM";
};


// eslint-disable-next-line import/no-default-export
export default function Head() {
  const pathName = usePathname();
  return (
    <>
      <title>{getTitleFromPath(pathName)}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
