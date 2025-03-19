import React, { useState } from "react";
// import { BsExposure } from "react-icons/bs";

export default function SettingPage() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    theme: "light",
    privacy: {
      shareData: false,
      showProfile: true,
    },
    language: "en",
  });

  const handleNotificationChange = (type) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [type]: !settings.notifications[type],
      },
    });
  };

  const handleThemeChange = (event) => {
    setSettings({
      ...settings,
      theme: event.target.value,
    });
  };

  const handlePrivacyChange = (type) => {
    setSettings({
      ...settings,
      privacy: {
        ...settings.privacy,
        [type]: !settings.privacy[type],
      },
    });
  };

  const handleLanguageChange = (event) => {
    setSettings({
      ...settings,
      language: event.target.value,
    });
  };

  const saveSettings = () => {
    // Here you would typically send the settings to your backend
    console.log("Settings saved:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="email-notifications" className="text-gray-700">
              Email Notifications
            </label>
            <div className="relative inline-block w-12 align-middle select-none">
              <input
                type="checkbox"
                id="email-notifications"
                checked={settings.notifications.email}
                onChange={() => handleNotificationChange("email")}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="email-notifications"
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                  settings.notifications.email ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="push-notifications" className="text-gray-700">
              Push Notifications
            </label>
            <div className="relative inline-block w-12 align-middle select-none">
              <input
                type="checkbox"
                id="push-notifications"
                checked={settings.notifications.push}
                onChange={() => handleNotificationChange("push")}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="push-notifications"
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                  settings.notifications.push ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="sms-notifications" className="text-gray-700">
              SMS Notifications
            </label>
            <div className="relative inline-block w-12 align-middle select-none">
              <input
                type="checkbox"
                id="sms-notifications"
                checked={settings.notifications.sms}
                onChange={() => handleNotificationChange("sms")}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="sms-notifications"
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                  settings.notifications.sms ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Appearance</h2>
        <div className="mb-4">
          <label htmlFor="theme" className="block text-gray-700 mb-2">
            Theme
          </label>
          <select
            id="theme"
            value={settings.theme}
            onChange={handleThemeChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="language" className="block text-gray-700 mb-2">
            Language
          </label>
          <select
            id="language"
            value={settings.language}
            onChange={handleLanguageChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Privacy</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="share-data" className="text-gray-700">
              Share usage data
            </label>
            <div className="relative inline-block w-12 align-middle select-none">
              <input
                type="checkbox"
                id="share-data"
                checked={settings.privacy.shareData}
                onChange={() => handlePrivacyChange("shareData")}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="share-data"
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                  settings.privacy.shareData ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="show-profile" className="text-gray-700">
              Show profile to others
            </label>
            <div className="relative inline-block w-12 align-middle select-none">
              <input
                type="checkbox"
                id="show-profile"
                checked={settings.privacy.showProfile}
                onChange={() => handlePrivacyChange("showProfile")}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="show-profile"
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                  settings.privacy.showProfile ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={saveSettings}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
