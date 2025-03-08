import { useState } from "react";
import ProfileForm from "../Components/Helper/profile";
import PreferenceForm from "../Components/Helper/preference";
import SecurityForm from "../Components/Helper/security";
import './Setting.css';


const Setting = () => {
  const [formToDisplay, setFormToDisplay] = useState('profile');

  const showProfile = () => setFormToDisplay('profile');
  const showPreference = () => setFormToDisplay('preference');
  const showSecurity = () => setFormToDisplay('security');

  return (
    <div className="bg-[#E5E5E5] min-h-screen overflow-y-auto overflow-x-hidden p-10 min-w-screen">


      <div className="flex flex-col bg-white rounded-xl">

        <div className="tab-menu">
          <span
            onClick={showProfile}
            className={`tab-item ${formToDisplay === 'profile' ? 'active-tab' : ''}`}
          >
            Edit Profile
          </span>
          <span
            onClick={showPreference}
            className={`tab-item ${formToDisplay === 'preference' ? 'active-tab' : ''}`}
          >
            Preference
          </span>
          <span
            onClick={showSecurity}
            className={`tab-item ${formToDisplay === 'security' ? 'active-tab' : ''}`}
          >
            Security
          </span>
        </div>

        <div>
          {
            formToDisplay === 'profile' ?
              <ProfileForm /> :
              formToDisplay === 'preference' ?
                <PreferenceForm /> :
                <SecurityForm />
          }
        </div>
      </div>
    </div>
  );
};

export default Setting;
