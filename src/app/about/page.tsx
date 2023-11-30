"use client";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="mt-6 text-3xl font-bold text-center uppercase">
        About Page
      </h1>
      <p className="w-1/2 text-center text-lg">
        Welcome to the epicenter of productivity, where chaos bows to
        organization, and tasks yield to your command. Introducing our
        revolutionary ToDo app – a dynamic force that transforms your daily
        grind into a symphony of success. Embark on a journey where managing
        tasks becomes a seamless art, and your schedule transforms into a canvas
        of triumph. Our app is not just a tool; its your sidekick in conquering
        the ever-evolving battlefield of productivity. Prepare to don your
        virtual cape as you unleash the superhero within, armed with
        supercharged features that annihilate procrastination. This isnt just an
        app; its your arsenal against missed deadlines and unfulfilled dreams.
        Step into a realm where every moment is seized, and every goal is within
        reach. Join the ranks of those who have embraced the extraordinary – the
        productivity revolutionaries. Dont just manage your tasks; master them.
        Elevate your productivity. Elevate your life. Welcome to the future –
        welcome to our ToDo app.
      </p>

      <Button onClick={handleClick}>Back to Todos</Button>
    </div>
  );
};

export default page;
