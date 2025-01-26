import { BsCurrencyExchange } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";

export interface MenuItem {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  list?: MenuItem[] | string;
}

export const menuItems: MenuItem[] = [
    {
      title: "Müştəri xidmətləri",
      list: [
        {
          title: "Nağd əməliyyatlar",
          path: "",
          icon: <FaMoneyBillAlt />,
          list: [
            {
              title: "Valyuta Mübailəsi",
              path: "/dashboard/cash/exchange",
              icon: <BsCurrencyExchange />,
            },
          ],
        },
        // {
        //   title: "Users",
        //   path: "/dashboard/users",
        //   icon: <MdSupervisedUserCircle />,
        //   list: "",
        // },
      ],
    },
];