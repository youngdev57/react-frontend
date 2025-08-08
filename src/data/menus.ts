type MenuItem = {
  name: string;
  to?: string;
  children?: { name: string; to: string }[];
};

export const MENUS: MenuItem[] = [
  {
    name: "Dashboard",
    to: "/dashboard",
  },
  {
    name: "Modules",
    to: "/modules",
    children: [
      { name: "Api", to: "/modules/api" },
      { name: "Pager", to: "/modules/pager" },
      { name: "File Manager", to: "/modules/file-manager" },
      { name: "Thumbnail Manager", to: "/modules/thumbnail-manager" },
      { name: "Region", to: "/modules/region" },
    ],
  },
  {
    name: "Common",
    to: "/common",
    children: [
      { name: "Form", to: "/common/form" },
      { name: "Grid", to: "/common/grid" },
      { name: "UI", to: "/common/ui" },
      { name: "Utils", to: "/common/utils" },
    ],
  },
  {
    name: "Templates",
    to: "/templates",
  },
  {
    name: "Libraries",
    to: "/libraries",
  },
];
