import React from 'react';
import '../Tabs/Tabs.css';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import { useLocation } from 'react-router-dom';

const Tabs = ({ NotificationPressed, PhotoPressed, TextPressed, calculatorPressed }) => {
    const params = useLocation();
  return (
    <div className='tabs_screen_main_div'>
        <div className="single_tab" onClick={() => NotificationPressed()} style={{ background: params.pathname == "/notifications" ? "lightgrey" : 'transparent' }}>
            <div className='tab_icon_div'>
                <CircleNotificationsOutlinedIcon style={{ color: 'darkgrey', }} />
            </div>
            <div className='notification_label'>
                Notifications
            </div>
        </div>
        <div className="photo_single_tab" onClick={() => PhotoPressed()} style={{ background: params.pathname == "/upload/photo" ? "lightgrey" : 'transparent' }}>
            <div className='tab_icon_div'>
                <PhotoCameraOutlinedIcon style={{ color: 'darkgrey', }} />
            </div>
            <div className='notification_label'>
                Photo
            </div>
        </div>
        <div className="single_tab" onClick={() => TextPressed()} style={{ background: params.pathname == "/write/text" ? "lightgrey" : 'transparent' }}>
            <div className='tab_icon_div'>
                <TextsmsOutlinedIcon style={{ color: 'darkgrey', }} />
            </div>
            <div className='notification_label'>
                Text
            </div>
        </div>
        <div className="single_tab" onClick={() => calculatorPressed()} style={{ background: params.pathname == "/calculator" ? "lightgrey" : 'transparent' }}>
            <div className='tab_icon_div'>
                <CalculateOutlinedIcon style={{ color: 'darkgrey', }} />
            </div>
            <div className='notification_label'>
                Calculator
            </div>
        </div>
    </div>
  )
}

export default Tabs