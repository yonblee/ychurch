import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <header>header</header>
      <main>
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
