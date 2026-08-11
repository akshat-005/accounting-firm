import { redirect } from "next/navigation";

/**
 * There's no standalone Contact page — contact details live in the "Visit us"
 * section of the About page. Redirect any /contact hit straight there.
 */
export default function ContactPage() {
  redirect("/about#contact");
}
