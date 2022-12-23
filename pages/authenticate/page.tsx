import { RequestCookie } from "next/dist/server/web/spec-extension/cookies/types";
import { useRouter } from "next/navigation";

export function Authenticate(user: RequestCookie | undefined, next: Function) {
  const router = useRouter();
  // Vérifiez l'état de connexion de l'utilisateur ici
  if (user) {
    // L'utilisateur est connecté, continuer
    next();
  } else {
    // L'utilisateur n'est pas connecté, renvoyer vers page d'erreur
    router.push("/error");
  }
}
