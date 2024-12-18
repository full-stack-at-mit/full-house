"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  const router = useRouter();
  const [bio, setBio] = useState("Hi! I am a sophomore majoring in course 6-3. I like traveling, sightseeing, and trying new cuisines.");
  const [location, setLocation] = useState("Cambridge, MA");
  const [activityStatus, setActivityStatus] = useState("Yes");
  const [privacy, setPrivacy] = useState("Public");
  const [profilePicture, setProfilePicture] = useState(null);
  const [statusText, setStatusText] = useState("Yes");
  const [genderText, setGenderText] = useState("No Preference");
  const [cleanText, setCleanText] = useState("Moderate");
  const [tempText, setTempText] = useState("Neutral");
  const [guestText, setGuestText] = useState("Flexible");
  const [sleepLightText, setSleepLightText] = useState("Dark");

  const handleLogout = () => {
    console.log("Logged out");
  };

  const handleDeleteAccount = () => {
    console.log("Account deleted");
  };

  const handleSaveChanges = () => {
    console.log("Changes saved");
  };

  const handleBack = () => {
    router.push("/dashboard");
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreferencesChange = (key, value) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-background items-center">
      <div className="flex mb-4 w-full max-w-md text-left">
        <button onClick={handleBack} className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold">Settings</h2>
      </div>

      <div className="flex flex-col items-center w-full max-w-md mb-2">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Profile Picture</label>
          <div className="relative mb-2">
            <img
              src={profilePicture || "/portrait1.jpg"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <label className="block text-sm font-semibold mb-1">Bio</label>
        <Input
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Edit your bio..."
          className="mb-4 w-full"
        />

        <label className="block text-sm font-semibold mb-1">Location</label>
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Edit your location..."
          className="mb-4 w-full"
        />

        <label className="block text-sm font-semibold mb-1">Actively looking for roommate</label>
        <select
          value={activityStatus}
          onChange={(e) => setActivityStatus(e.target.value)}
          className="w-full mb-4 bg-white border border-gray-300 rounded-md p-2"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label className="block text-sm font-semibold mb-1">Privacy</label>
        <select
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-md p-2"
        >
          <option value="Public">Public</option>
          <option value="Private">Partial (hide location)</option>
          <option value="Private">Private</option>
        </select>
        <p className="mb-4 text-xs text-gray-500 text-left">
          Public: Anyone can see your profile and location<br />
          Partial: Anyone can see your profile but your location is hidden<br />
          Private: Your profile and location are hidden
        </p>

        <label className="block text-sm font-semibold">Preferences</label>
        <div className="w-full">
          <label className="block text-sm font-medium mt-4">Looking for Housing</label>
          <select
            value={statusText}
            onChange={(e) => setStatusText(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2"
          >
            <option value="0">Not looking for housing</option>
            <option value="1">Looking for housing</option>
            <option value="2">Have housing plans and looking for roommate(s)</option>
          </select>

          <label className="block text-sm font-medium">Gender Preference</label>
          <select
            value={genderText}
            onChange={(e) => setGenderText(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2"
          >
            <option value="0">Male</option>
            <option value="1">Female</option>
            <option value="2">Transmale</option>
            <option value="3">Transfemale</option>
            <option value="4">Neutral/Other</option>
            <option value="5">Prefer not to say</option>
          </select>

          <label className="block text-sm font-medium">Cleanliness Preference</label>
          <select
            value={cleanText}
            onChange={(e) => setCleanText(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2"
          >
            <option value="0">I prefer my living space to be neat and clean all of the time</option>
            <option value="1">I like my living space to be clean but I can tolerate some clutter</option>
            <option value="2">Mess/clutter does not bother me</option>
          </select>

          <label className="block text-sm font-medium">Temperature Preference</label>
          <select
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2"
          >
            <option value="0">I prefer a relatively warm temperature (above 72F/22C)</option>
            <option value="1">I prefer a relatively cool temperature (below 68F/20C)</option>
            <option value="2">No preference</option>
          </select>

          <label className="block text-sm font-medium">Guest Policy</label>
          <select
            value={guestText}
            onChange={(e) => setGuestText(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2"
          >
            <option value="0">Guests should always be coordinated to make sure everyone is comfortable.</option>
            <option value="1">Let's talk together about what rules we want to set about guests coming over.</option>
            <option value="2">Spontaneity is great! Anything (within reason) is fine by me.</option>
          </select>

          <label className="block text-sm font-medium">Sleep Light Level</label>
          <select
            value={sleepLightText}
            onChange={(e) => setSleepLightText(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md p-2 mb-4"
          >
            <option value="0">Lights on</option>
            <option value="1">Some minimal light</option>
            <option value="2">Completely dark</option>
            <option value="3">No preference</option>
          </select>
        </div>

        <Button onClick={handleSaveChanges} className="w-full mt-4">Save Changes</Button>
      </div>

      <div className="flex flex-col w-full max-w-md">
        <Button onClick={handleLogout} className="mb-2 w-full">Logout</Button>
        <Button onClick={handleDeleteAccount} className="bg-red-500 text-white w-full">Delete Account</Button>
      </div>
    </div>
  );
}
