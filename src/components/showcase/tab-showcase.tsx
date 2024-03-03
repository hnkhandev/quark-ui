"use client";

import { MouseEvent, useEffect, useState } from "react";
import { ComponentShowcaseCard } from "./component-showcase-card";
import * as Ariakit from "@ariakit/react";
import { cn } from "@/lib/utils";

export function TabShowcase() {
  const defaultSelectedId = "home";
  const { animatedTabProps, handleTabClick } =
    useTabAnimator(defaultSelectedId);

  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <div className="flex flex-col text-sm font-medium">
          <Ariakit.TabProvider defaultSelectedId={defaultSelectedId}>
            <Ariakit.TabList
              className="relative flex gap-2 h-9 p-1 rounded-md bg-zinc-100 text-white items-center justify-center dark:bg-zinc-800"
              aria-label="Groceries"
            >
              <TabAnimator
                width={animatedTabProps.width}
                left={animatedTabProps.left}
                shouldAnimate={animatedTabProps.shouldAnimate}
              />
              {[
                { tabName: "User Profile", tabId: "user-profile" },
                { tabName: "Home", tabId: "home" },
                { tabName: "Product Inventory", tabId: "product-inventory" },
              ].map((tab) => (
                <Ariakit.Tab
                  key={tab.tabId}
                  className="py-1 px-2 rounded-[0.32rem] mix-blend-exclusion relative hover:bg-zinc-900 aria-selected:hover:bg-transparent whitespace-nowrap"
                  onClick={handleTabClick}
                  id={tab.tabId}
                >
                  {tab.tabName}
                </Ariakit.Tab>
              ))}
            </Ariakit.TabList>
          </Ariakit.TabProvider>
        </div>
      </ComponentShowcaseCard>
    </div>
  );
}

function TabAnimator({
  width,
  left,
  shouldAnimate,
}: {
  width: number;
  left: number;
  shouldAnimate: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute h-7 bg-white rounded-[0.32rem] bottom-1 left-0 dark:bg-black",
        shouldAnimate && "transition-all duration-300"
      )}
      style={{
        width: `${width}px`,
        transform: `translateX(${left}px)`,
      }}
    />
  );
}

function useTabAnimator(defaultSelectedId: string) {
  const [animatedTabProps, setAnimatedTabProps] = useState({
    width: 0,
    left: 0,
    shouldAnimate: false,
  });

  function handleTabClick(event: MouseEvent<HTMLButtonElement>) {
    const tabElement = event.currentTarget;
    const props = {
      left: tabElement.offsetLeft,
      width: tabElement.getBoundingClientRect().width,
      shouldAnimate: true,
    };
    setAnimatedTabProps(props);
  }

  useEffect(() => {
    const setInitialSliderStyle = () => {
      const defaultTabElement = document.getElementById(defaultSelectedId);

      if (defaultTabElement) {
        const props = {
          left: defaultTabElement.offsetLeft,
          width: defaultTabElement.offsetWidth,
          shouldAnimate: false,
        };
        setAnimatedTabProps(props);
        requestAnimationFrame(() => {
          setAnimatedTabProps((prevProps) => ({
            ...prevProps,
            shouldAnimate: true,
          }));
        });
      }
    };

    setInitialSliderStyle();
  }, [defaultSelectedId]);

  return { animatedTabProps, handleTabClick };
}
