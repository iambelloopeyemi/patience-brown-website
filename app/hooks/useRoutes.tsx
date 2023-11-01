type useRoutesProps = {
  link: string;
  linkText: string;
};

const links: string[] = ["about", "process", "schedule-a-call"];

export function useRoutes(): useRoutesProps[] {
  return links.map((link) => ({
    link,
    linkText: link.replace(/-/g, " "),
  }));
}
