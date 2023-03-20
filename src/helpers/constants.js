export const MainNavs = {
  dashboard: "",
  orders: "orders",
  teamMembers: "team-members",
  partners: "partners",
  productListings: "product-listings",
  awardsHonours: "awards-honours",
  aboutUs: "about-us",
  paymentInfo: "payment-info",
};

export const AboutUsNavs = {
  info: "info",
  FAQ: "faq",
  complaintsFeedBack: "complaints-feedback",
  privacyPolicy: "privacy-policy",
  termsCondition: "terms-condition",
};

export const navItems = [
  {
    id: "nav-dashboard",
    icon: "dashboard",
    name: "Dashboard",
    toUrl: MainNavs.dashboard,
    component: "Default",
  },
  {
    id: "nav-orders",
    icon: "shopping-basket",
    name: "Orders",
    toUrl: MainNavs.orders,
    component: "Default",
  },
  {
    id: "nav-team-members",
    icon: "user-group",
    name: "Team Members",
    toUrl: MainNavs.teamMembers,
    component: "Default",
  },
  {
    id: "nav-partners",
    icon: "handshake-angle",
    name: "Partners",
    toUrl: MainNavs.partners,
    component: "Default",
  },
  {
    id: "nav-product-listings",
    icon: "list",
    name: "Product Listings",
    toUrl: MainNavs.productListings,
    component: "Default",
  },
  {
    id: "nav-awards-honours",
    icon: "trophy",
    name: "Awards & Honours",
    toUrl: MainNavs.awardsHonours,
    component: "Default",
  },
  {
    id: "nav-about-us",
    icon: "info",
    name: "About Us",
    toUrl: MainNavs.aboutUs,
    component: "AboutUs",
  },
  {
    id: "nav-payment-info",
    icon: "money-bills",
    name: "Payment Info",
    toUrl: MainNavs.paymentInfo,
    component: "Default",
  },
];

export const AboutUsItems = [
  {
    id: "about-nav-info",
    name: "Info",
    toUrl: AboutUsNavs.info,
    component: "",
  },
  {
    id: "about-nav-faq",
    name: "FAQ",
    toUrl: AboutUsNavs.FAQ,
    component: "",
  },
  {
    id: "about-nav-complaints-feedback",
    name: "Complaints and feedback",
    toUrl: AboutUsNavs.complaintsFeedBack,
    component: "",
  },
  {
    id: "about-nav-privacy-policy",
    name: "Privacy Policy",
    toUrl: AboutUsNavs.privacyPolicy,
    component: "",
  },
  {
    id: "about-nav-terms-condition",
    name: "Terms & Condition",
    toUrl: AboutUsNavs.termsCondition,
    component: "",
  },
];

const privacyArticle = {
  name: "Your Privacy Matters",
  contents: [
    {
      contentId: "article-introduction",
      contentName: "Introduction",
      contentText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati doloremque asperiores dicta id pariatur voluptates veritatis molestias officiis eius, optio quae voluptatum ab inventore illum? Veniam porro esse ducimus suscipit.",
    },
    {
      contentId: "article-data-collect",
      contentName: "Data we collect",
      contentText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati doloremque asperiores dicta id pariatur voluptates veritatis molestias officiis eius, optio quae voluptatum ab inventore illum? Veniam porro esse ducimus suscipit.",
    },
    {
      contentId: "article-data-use",
      contentName: "How we use your data",
      contentText: "Lorem ipsum",
    },
    {
      contentId: "article-share-information",
      contentName: "How we share information",
      contentText: "Lorem ipsum",
    },
    {
      contentId: "article-choices-obligations",
      contentName: "Your choices and obligations",
      contentText: "Lorem ipsum",
    },
    {
      contentId: "Other-info",
      contentName: "Other imortant information",
      contentText: "Lorem ipsum",
    },
  ],
};

const termsConditionArticle = {
  name: "Terms & Condition",
  contents: [
    {
      contentId: "article-agreement",
      contentName: "Agreement",
      contentText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati doloremque asperiores dicta id pariatur voluptates veritatis molestias officiis eius, optio quae voluptatum ab inventore illum? Veniam porro esse ducimus suscipit.",
    },
    {
      contentId: "article-services-subscription",
      contentName: "Services & Paid Subscription",
      contentText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati doloremque asperiores dicta id pariatur voluptates veritatis molestias officiis eius, optio quae voluptatum ab inventore illum? Veniam porro esse ducimus suscipit.",
    },
    {
      contentId: "article-rights-laws",
      contentName: "Rights & Laws",
      contentText: "Lorem ipsum",
    },
    {
      contentId: "article-third-party",
      contentName: "3rd Party Applications",
      contentText: "Lorem ipsum",
    },
    {
      contentId: "article-rights-granted",
      contentName: "Rights you grant us",
      contentText: "Lorem ipsum",
    },
  ],
};

export const articles = {
  "privacy-policy": privacyArticle,
  "terms-condition": termsConditionArticle,
};
