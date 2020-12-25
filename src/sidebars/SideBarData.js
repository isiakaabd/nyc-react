import * as AiIcons from "react-icons/ai"
import * as faIcons from "react-icons/fa"
import * as GrIcons from "react-icons/gr"
import * as FiIcons from "react-icons/fi"
import * as BiIcons from "react-icons/bi"
import * as SiIcons from "react-icons/si"
import * as ImIcons from "react-icons/im"




export const sideBarData =
    [{
        title: "Edit Record",
        path: "/",
        icon: <faIcons.FaUserEdit />,
        classname: "nav-text"
    },
    {
        title: "Select/Update Package",
        path: "/Select/Update Package",
        icon: <GrIcons.GrUpdate />,
        classname: "nav-text"
    },
    {
        title: "Stats",
        path: "/Stats",
        icon: <ImIcons.ImStatsDots />,
        classname: "nav-text"
    },
    {
        title: "Manage Ads",
        path: "/Manage Ads",
        icon: <SiIcons.SiManageiq />,
        classname: "nav-text"
    },
    {
        title: "Events",
        path: "/Events",
        icon: <BiIcons.BiCalendarEvent />,
        classname: "nav-text"
    },
    {
        title: "Upload Documents",
        path: "/Upload Documents",
        icon: <FiIcons.FiUploadCloud />,
        classname: "nav-text"
    },
    {
        title: "Notifications/Inbox",
        path: "/Notifications/Inbox",
        icon: <FiIcons.FiUploadCloud />,
        classname: "nav-text"
    },
    {
        title: "Settings",
        path: "/Settings",
        icon: <FiIcons.FiSettings />,
        classname: "nav-text"
    },

    {
        title: "Logout",
        path: "/Logout",
        icon: <FiIcons.FiLogOut />,

        classname: "nav-text"
    },
    ]