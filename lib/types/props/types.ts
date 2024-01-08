import { SocialMediaLink } from "../links/types";

export type NewsTickerProps = {
  news: string[];
};

export type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
  imgSrc: string;
  imgAlt: string;
};

export type PostNavigationProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export type SocialSharingProps = {
  links: SocialMediaLink[];
};

export type SubheadingProps = {
  children: React.ReactNode;
  className: string;
  url: string;
  linkText: string;
};

export type SubscribeProps = {
  formClassName?: string;
  formFieldsClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
};
