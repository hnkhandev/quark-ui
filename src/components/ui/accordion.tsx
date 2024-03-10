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

function useRegisterItem() {
  const disclosures = React.useRef<Record<string, Ariakit.DisclosureStore>>({});

  function registerItem(disclosureId: string) {
    const store = Ariakit.useDisclosureStore();
    disclosures.current[disclosureId] = store;
    return store;
  }

  return { disclosures, registerItem };
}

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const [currentOpenDisclosureId, setCurrentOpenDisclosureId] = React.useState<
    string | null
  >(null);
  const { disclosures, registerItem } = useRegisterItem();

  function toggleDisclosure(disclosureId: string) {
    if (currentOpenDisclosureId && currentOpenDisclosureId !== disclosureId) {
      disclosures.current[currentOpenDisclosureId].hide();
    }
    setCurrentOpenDisclosureId(disclosureId);
  }

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

Accordion.displayName = "Accordion";

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

AccordionTrigger.displayName = "AccordionTrigger";

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

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
