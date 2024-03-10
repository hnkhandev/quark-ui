"use client";

import { cn } from "@/lib/utils";
import * as Ariakit from "@ariakit/react";
import * as React from "react";
import {
  Disclosure,
  DisclosureContent,
  DisclosureProvider,
} from "./disclosure";

interface AccordionContextProps {
  registerItem: (disclosureId: string) => Ariakit.DisclosureStore;
  toggleDisclosure: (disclosureId: string) => void;
  disclosureId: string | null;
}

const AccordionContext = React.createContext<AccordionContextProps | undefined>(
  undefined
);

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const [currentOpenDisclosureId, setCurrentOpenDisclosureId] = React.useState<
    string | null
  >(null);
  const disclosures: Record<string, Ariakit.DisclosureStore> = {};

  const registerItem = (disclosureId: string) => {
    const store = Ariakit.useDisclosureStore();
    disclosures[disclosureId] = store;
    return store;
  };

  const toggleDisclosure = (disclosureId: string) => {
    if (currentOpenDisclosureId && currentOpenDisclosureId !== disclosureId) {
      disclosures[currentOpenDisclosureId].hide();
    }
    setCurrentOpenDisclosureId(disclosureId);
  };

  return (
    <AccordionContext.Provider
      value={{ registerItem, toggleDisclosure, disclosureId: null }}
    >
      <Ariakit.CompositeProvider>
        <Ariakit.Composite
          className={cn("flex flex-col gap-2", className)}
          ref={ref}
          {...props}
        >
          {children}
        </Ariakit.Composite>
      </Ariakit.CompositeProvider>
    </AccordionContext.Provider>
  );
});

export interface AccordionItemProps extends Ariakit.DisclosureProviderProps {
  children: React.ReactNode;
}

function AccordionItem({ children, ...props }: AccordionItemProps) {
  const { registerItem, toggleDisclosure } = React.useContext(
    AccordionContext
  ) as AccordionContextProps;
  const disclosureId = React.useId();
  const store = registerItem(disclosureId);

  return (
    <AccordionContext.Provider
      value={{ registerItem, toggleDisclosure, disclosureId }}
    >
      <DisclosureProvider store={store} {...props}>
        {children}
      </DisclosureProvider>
    </AccordionContext.Provider>
  );
}

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Disclosure> {}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Disclosure>,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => {
  const { toggleDisclosure, disclosureId } = React.useContext(
    AccordionContext
  ) as AccordionContextProps;

  return (
    <Disclosure
      onClick={() => toggleDisclosure(disclosureId!)}
      render={<Ariakit.CompositeItem />}
      className={cn(className)}
      ref={ref}
      {...props}
    >
      {children}
    </Disclosure>
  );
});

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof DisclosureContent> {}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof DisclosureContent>,
  AccordionContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <DisclosureContent className={cn(className)} ref={ref} {...props}>
      {children}
    </DisclosureContent>
  );
});

export function DisclosureShowcase() {
  const accordionItems = ["item 1", "item 2", "item 3"];

  return (
    <Accordion>
      {accordionItems.map((item) => (
        <AccordionItem key={item}>
          <AccordionTrigger>{item}</AccordionTrigger>
          <AccordionContent
            animated={true}
          >{`This is the content for ${item}`}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
