
import * as faIcons from "react-icons/fa"
import * as GrIcons from "react-icons/gr"
import * as FiIcons from "react-icons/fi"
import * as BiIcons from "react-icons/bi"
import * as SiIcons from "react-icons/si"
import * as ImIcons from "react-icons/im"
import * as RiIcons from "react-icons/ri"
import Logout from "../components/Validation/setups"




export const sideBarData =
    [{
        title: "Edit Record",
        path: "/userpage/",
        icon: <faIcons.FaUserEdit />,
        classname: "nav-text"
    },
    {
        title: "Select/Update Package",
        path: "/userpage/SelectPackage",
        icon: <GrIcons.GrUpdate />,
        classname: "nav-text"
    },
    {
        title: "Stats",
        path: "/userpage/stats",
        icon: <ImIcons.ImStatsDots />,
        classname: "nav-text"
    },
    {
        title: "Manage Ads",
        path: "/userpage/ManageAds",
        icon: <SiIcons.SiManageiq />,
        classname: "nav-text"
    },
    {
        title: "Events",
        path: "/userpage/Events",
        icon: <BiIcons.BiCalendarEvent />,
        classname: "nav-text"
    },
    {
        title: "Upload Documents",
        path: "/userpage/upload",
        icon: <FiIcons.FiUploadCloud />,
        classname: "nav-text"
    },
    {
        title: "Notifications/Inbox",
        path: "/userpage/Notifications",
        icon: <RiIcons.RiNotification2Line />,
        classname: "nav-text"
    },
    {
        title: "Settings",
        path: "/userpage/Settings",
        icon: <FiIcons.FiSettings />,
        classname: "nav-text"
    },

    {
        title: "Logout",
        icon: <FiIcons.FiLogOut />,
        classname: "nav-text",
        func: Logout()
    },
    ]