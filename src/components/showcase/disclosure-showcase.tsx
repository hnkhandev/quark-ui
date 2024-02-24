"use client";

import * as Ariakit from "@ariakit/react";
import { ComponentShowcaseCard } from "./component-showcase-card";
import {
  AnimatedDisclosureContent,
  Disclosure,
  DisclosureContainer,
  DisclosureContent,
} from "../ui/disclosure";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function DisclosureShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <div className="max-w-[300px] w-full">
          <Ariakit.DisclosureProvider>
            <Disclosure>
              Disclose
              <ChevronDownIcon className="w-4 h-4 group-aria-expanded:rotate-180" />
            </Disclosure>
            <DisclosureContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto doloremque iste perferendis alias assumenda illo
              commodi. Quos, eligendi error magni asperiores laboriosam est.
              Impedit, veritatis earum adipisci reiciendis deleniti dolor beatae
              odit quisquam id quibusdam minus labore doloremque laboriosam
              officia aliquam sapiente molestiae molestias, hic saepe? Minus,
              vitae quis iusto nemo quae optio quam unde aliquam quos delectus
              minima quas eligendi obcaecati, perferendis a ut fuga ipsum
              tempore? Eius et in non eos, nihil libero rerum id voluptates
              similique cupiditate voluptas. Accusantium hic praesentium quasi
              autem ea libero magnam, repellendus repellat. Delectus quisquam
              illum blanditiis, praesentium maiores facilis dolorem ab.
            </DisclosureContent>
          </Ariakit.DisclosureProvider>
        </div>
      </ComponentShowcaseCard>
      <ComponentShowcaseCard>
        <div className="max-w-[300px] w-full">
          <Ariakit.DisclosureProvider>
            <Disclosure>
              Disclose
              <ChevronDownIcon className="w-4 h-4 transition-all duration-300 group-aria-expanded:rotate-180" />
            </Disclosure>
            <DisclosureContent animated={true}>
              <AnimatedDisclosureContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto doloremque iste perferendis alias assumenda illo
                commodi. Quos, eligendi error magni asperiores laboriosam est.
                Impedit, veritatis earum adipisci reiciendis deleniti dolor
                beatae odit quisquam id quibusdam minus labore doloremque
                laboriosam officia aliquam sapiente molestiae molestias, hic
                saepe? Minus, vitae quis iusto nemo quae optio quam unde aliquam
                quos delectus minima quas eligendi obcaecati, perferendis a ut
                fuga ipsum tempore? Eius et in non eos, nihil libero rerum id
                voluptates similique cupiditate voluptas. Accusantium hic
                praesentium quasi autem ea libero magnam, repellendus repellat.
                Delectus quisquam illum blanditiis, praesentium maiores facilis
                dolorem ab.
              </AnimatedDisclosureContent>
            </DisclosureContent>
          </Ariakit.DisclosureProvider>
        </div>
      </ComponentShowcaseCard>
      <ComponentShowcaseCard>
        <DisclosureContainer className="max-w-[300px] w-full">
          <Ariakit.DisclosureProvider>
            <Disclosure>
              Disclose
              <ChevronDownIcon className="w-4 h-4 transition-all duration-300 group-aria-expanded:rotate-180" />
            </Disclosure>
            <DisclosureContent animated={true}>
              <AnimatedDisclosureContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto doloremque iste perferendis alias assumenda illo
                commodi. Quos, eligendi error magni asperiores laboriosam est.
                Impedit, veritatis earum adipisci reiciendis deleniti dolor
                beatae odit quisquam id quibusdam minus labore doloremque
                laboriosam officia aliquam sapiente molestiae molestias, hic
                saepe? Minus, vitae quis iusto nemo quae optio quam unde aliquam
                quos delectus minima quas eligendi obcaecati, perferendis a ut
                fuga ipsum tempore? Eius et in non eos, nihil libero rerum id
                voluptates similique cupiditate voluptas. Accusantium hic
                praesentium quasi autem ea libero magnam, repellendus repellat.
                Delectus quisquam illum blanditiis, praesentium maiores facilis
                dolorem ab.
              </AnimatedDisclosureContent>
            </DisclosureContent>
          </Ariakit.DisclosureProvider>
        </DisclosureContainer>
      </ComponentShowcaseCard>
    </div>
  );
}
