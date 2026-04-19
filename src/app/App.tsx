import { RouterProvider } from "react-router";
import { router } from "./routes";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppButton />
    </>
  );
}
