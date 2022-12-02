import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as VscIcons from 'react-icons/vsc';

export const SidebarData = [
    {
        title: 'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus/>
    },  
    {
        title:'Generate Delivery List',
        path:'/gen_delivery_list',
        icon:<AiIcons.AiFillSnippets/>,
        iconClosed: <RiIcons.RiArrowDropDownFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[
        {
            title: 'All Delivery List',
            path:'/gen_deliver_list/all_delivery_list',
            icons: <IoIcons.IoIosPaper/>,
        },
        {
            title: 'Today Delivery List',
            path:'/gen_deliver_list/today_delivery_list',
            icons: <IoIcons.IoIosPaper/>,
        },
        {
            title: 'Pending Delivery List',
            path:'/gen_deliver_list/pending_delivery_list',
            icons: <IoIcons.IoIosPaper/>,
        },
        {
            title: 'Emergency Delivery List',
            path:'/gen_deliver_list/emergency_delivery_list',
            icons: <IoIcons.IoIosPaper/>,
        },
        
        
    ]
    },
    {
        title:'Status of Delivery',
        path:'/status',
        icon:<AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDropDownFill/>,
        subNav:[
        {
            title: 'Order Status',
            path:'/status/status_order',
            icons: <IoIcons.IoIosPaper/>,
        },
        {
            title:'Pending orders',
            path:'/status/pending_order',
            icons: <IoIcons.IoIosPaper/>,
        },
    ]
    },

    {
        title:'Out of Delivery',
        path:'/out_of_delivery',
        icon:<IoIcons.IoIosJet/>,
        iconClosed: <RiIcons.RiArrowDropDownFill/>,
        subNav:[
        {
            title: 'Custome Sign',
            path:'/out_of_delivery/customer_sign',
            icons: <IoIcons.IoIosPaper/>,
        },
        {
            title:'Feedback',
            path:'/out_of_delivery/feedback',
            icons: <IoIcons.IoIosPaper/>,
        },
    ]
    },

    {
        title: 'Return to Warehouse',
        path:'/return',
        icon:<TbIcons.TbTruckReturn/>

    },

    {
        title: 'Update',
        path:'/update',
        icon:<VscIcons.VscNewFile/>
    }    
]