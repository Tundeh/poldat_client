module.exports = {
  items: [
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard",
          icon: "home",
        },
      ],
    },
    {
      id: "members",
      title: "Members",
      type: "group",
      icon: "people",
      children: [
        {
          id: "members_List",
          title: `Member's List`,
          type: "item",
          url: "/members/list",
          icon: "address-book",
        },
        {
          id: "add_members",
          title: "Add Members",
          type: "item",
          url: "/members/new",
          icon: "user-plus",
        },
      ],
    },
    {
      id: "groups",
      title: "Groups",
      type: "group",
      icon: "groups",
      children: [
        {
          id: "groups_list",
          title: "Groups List",
          type: "item",
          icon: "users",
          url: "/groups/list",
        },
        {
          id: "create_groups",
          title: "Create Group",
          type: "item",
          icon: "plus-square",
          url: "/groups/new",
        },
      ],
    },
    {
      id: "users",
      title: "Users",
      type: "group",
      icon: "users",
      children: [
        {
          id: "users_list",
          title: `User's List`,
          type: "item",
          icon: "users",
          url: "/users/list",
        },
        {
          id: "create_users",
          title: "Create Users",
          type: "item",
          icon: "user-plus",
          url: "/users/new",
        },
      ],
    },
    {
      id: "external",
      title: "External",
      type: "group",
      icon: "icon-external",
      children: [
        {
          id: "share",
          title: "Share",
          type: "item",
          icon: "share-alt",
          url: "/share"
        },
        {
          id: "logout",
          title: "Logout",
          type: "item",
          icon: "sign-out-alt",
          url: "/login"
        }
      ]
    }
  ]
};
