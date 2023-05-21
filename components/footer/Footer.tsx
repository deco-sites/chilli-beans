import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import BackToTop from "$store/islands/BackToTop.tsx";
import type { ComponentChildren } from "preact";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

export type SocialMedia = {
  imageSrc: LiveImage;
  imageAlt: string;
  href: string;
};
export type ImageLinkProps = {
  imageSrc: LiveImage;
  imageAlt: string;
  href: string;
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <span class="text-primary-content">
      {isIcon(item)
        ? (
          <div class="border-base-100 border border-solid py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href} class="text-white text-xs">
            {item.label}
          </a>
        )}
    </span>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return (
    <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>
      {children}
    </div>
  );
}

export interface Props {
  SocialMedias?: SocialMedia[];
  logoImage?: ImageLinkProps;
  sections?: Section[];
}

function PaymentSection() {
  return (
    <div class="w-full flex flex-col items-center justify-center bg-white">
      <h4 class="mb-4 text-base font-bold">formas de pagamento</h4>
      <figure class="w-full">
        <Image
          src={"/"}
          alt={"/"}
          width={596}
          height={28}
        />
      </figure>

      <h4 class="mb-4 text-base font-bold">loja segura</h4>
      {/* Icones */}

      <p class="px-4 mb-4 text-center text-zinc-400">
        <strong class="text-black">razão social:</strong>
        super 25 comércio eletronico de oculos e acessórios s.a. cnpj:
        14.439.371/0002-60
      </p>

      <p class="px-4 mb-4 text-center text-zinc-400">
        <strong class="text-black">endereço:</strong>
        alameda amazonas, 594, terreo mezanino, alphaville industrial cep:
        06454-070 - barueri - sp
      </p>

      <p class="text-center text-zinc-400">
        layout e desenvolvimento
        <a href="">
          <figure class="w-full">
            <Image
              src={"/"}
              alt={"/"}
              width={596}
              height={28}
            />
          </figure>
        </a>
      </p>

      <p class="mt-7 text-center text-zinc-400">
        chilli beans 2020 | todos os direitos reservados
      </p>
    </div>
  );
}

function SocialMedia(SocialMedias: SocialMedia[]) {
  if (!SocialMedias) return <></>;

  return (
    <ul class="flex flex-row justify-center items-center">
      {SocialMedias.map((SocialMedia) => {
        return (
          <li class="mx-4 w-6">
            <a href={SocialMedia.href}>
              <figure>
                <Image
                  src={SocialMedia.imageSrc}
                  alt={SocialMedia.imageAlt}
                  width={24}
                  height={24}
                />
              </figure>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function Footer({ sections = [], logoImage, SocialMedias = [] }: Props) {
  return (
    <footer class="w-full bg-black flex flex-col divide-y divide-primary-content">
      <div>
        <div class="container w-full flex flex-col divide-y divide-primary-content">
          <FooterContainer>
            <Newsletter />
          </FooterContainer>

          <FooterContainer>
            <div class="flex flex-col  items-center justify-center mb-8">
              <BackToTop />

              <div class="w-fit my-8">
                <a class="w-fit" href={logoImage?.href}>
                  <figure class="flex justify-center items-center">
                    <Image
                      src={logoImage?.imageSrc ?? "/"}
                      alt={logoImage?.imageAlt}
                      width={164}
                      height={36}
                    />
                  </figure>
                </a>
              </div>

              {SocialMedia(SocialMedias)}
            </div>
          </FooterContainer>

          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row gap-20">
              {sections.map((section) => (
                <li>
                  <div>
                    <span class="font-medium text-xl text-primary-content">
                      {section.label}
                    </span>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2 flex-wrap`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li>
                  <span class="text-primary-content">
                    <details class="group">
                      <summary class="flex flex-row justify-between text-white text-2xl">
                        {section.label}
                        <Icon
                          className="block group-[open=true]:rotate-180"
                          id="ChevronDown"
                          width={24}
                          height={24}
                          strokeWidth={1}
                        />
                      </summary>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } gap-2 px-2 pt-2`}
                      >
                        {section.children.map((item) => (
                          <li>
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  </span>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </div>
      </div>
      <div class="px-4 py-10 bg-white">
        {PaymentSection()}
      </div>

      <div>
        <div class="container w-full">
          <FooterContainer class="flex justify-between w-full">
            <span class="flex items-center gap-1 text-primary-content">
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
            </span>

            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-primary-content"
                    width={32}
                    height={32}
                    id="Instagram"
                    strokeWidth={1}
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://www.deco.cx/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord logo"
                >
                  <Icon
                    class="text-primary-content"
                    width={32}
                    height={32}
                    id="Discord"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
          </FooterContainer>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
