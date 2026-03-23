import { useState } from "react"
import { Camera, Pencil, Check, X } from "lucide-react"

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Rajesh Kumar",
    email: "RajeshKumar1234@gmail.com",
    phone: "+91 - 1234567890",
    designation: "Production",
    empId: "EMP 00123456",
    avatar: "https://i.pravatar.cc/100?img=12",
  })

  // Temp state while editing
  const [editValues, setEditValues] = useState({ ...profile })
  const [isEditing, setIsEditing] = useState(false)

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  })

  const [profileSaved, setProfileSaved] = useState(false)
  const [passwordSaved, setPasswordSaved] = useState(false)
  const [passwordError, setPasswordError] = useState("")

  const handleEditChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value })
  }

  const handleSaveProfile = () => {
    setProfile({ ...editValues })
    setIsEditing(false)
    setProfileSaved(true)
    setTimeout(() => setProfileSaved(false), 3000)
  }

  const handleCancelEdit = () => {
    setEditValues({ ...profile })
    setIsEditing(false)
  }

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value })
    setPasswordSaved(false)
    setPasswordError("")
  }

  const handleUpdatePassword = () => {
    if (!passwords.current || !passwords.newPass || !passwords.confirm) {
      setPasswordError("Please fill all password fields!")
      return
    }
    if (passwords.newPass !== passwords.confirm) {
      setPasswordError("New password and confirm password do not match!")
      return
    }
    if (passwords.newPass.length < 6) {
      setPasswordError("Password must be at least 6 characters!")
      return
    }
    setPasswordError("")
    setPasswordSaved(true)
    setPasswords({ current: "", newPass: "", confirm: "" })
    setTimeout(() => setPasswordSaved(false), 3000)
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setProfile({ ...profile, avatar: url })
      setEditValues({ ...editValues, avatar: url })
    }
  }

  // Reusable read-only field
  const ReadField = ({ label, value }) => (
    <div>
      <label className="text-xs font-semibold text-blue-500 mb-1.5 block">{label}</label>
      <div className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 select-none">
        {value}
      </div>
    </div>
  )

  // Reusable editable field
  const EditField = ({ label, name, value, type = "text" }) => (
    <div>
      <label className="text-xs font-semibold text-blue-500 mb-1.5 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleEditChange}
        className="w-full px-4 py-2.5 rounded-xl border border-blue-400 bg-white text-sm text-slate-700 outline-none focus:border-blue-500 transition-colors duration-200"
      />
    </div>
  )

  return (
    <>
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800">
        Profile Information
      </h1>
      <p className="text-sm text-slate-400 mb-6">
        Update your personal details
      </p>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm mb-6">

        {/* Avatar + Name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative shrink-0">
            <img
              src={profile.avatar}
              alt="avatar"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover ring-4 ring-slate-100"
            />
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
            <button
              onClick={() => document.getElementById("avatarInput").click()}
              className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-colors duration-200"
            >
              <Camera className="w-3 h-3" />
            </button>
          </div>

          <div className="flex-1">
            <h2 className="text-lg lg:text-xl font-bold text-slate-800">
              {profile.name}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-400">{profile.empId}</span>
            </div>
          </div>

          {/* Edit / Cancel buttons */}
          {!isEditing ? (
            <button
              onClick={() => { setEditValues({ ...profile }); setIsEditing(true) }}
              className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-400 px-3 py-1.5 rounded-xl transition-colors duration-200"
            >
              <Pencil className="w-3.5 h-3.5" />
              Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancelEdit}
                className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-700 border border-slate-200 hover:border-slate-400 px-3 py-1.5 rounded-xl transition-colors duration-200"
              >
                <X className="w-3.5 h-3.5" />
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                className="flex items-center gap-1 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 px-3 py-1.5 rounded-xl transition-colors duration-200"
              >
                <Check className="w-3.5 h-3.5" />
                Save
              </button>
            </div>
          )}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {isEditing ? (
            <>
              <EditField label="Name" name="name" value={editValues.name} />
              <EditField label="Email" name="email" value={editValues.email} type="email" />
              <EditField label="Phone" name="phone" value={editValues.phone} />
              <EditField label="Designation" name="designation" value={editValues.designation} />
            </>
          ) : (
            <>
              <ReadField label="Name" value={profile.name} />
              <ReadField label="Email" value={profile.email} />
              <ReadField label="Phone" value={profile.phone} />
              <ReadField label="Designation" value={profile.designation} />
            </>
          )}
        </div>

        {/* Success message */}
        {profileSaved && (
          <div className="mb-4 px-4 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl">
            <p className="text-sm text-emerald-600 font-medium">
              ✅ Profile saved successfully!
            </p>
          </div>
        )}

      </div>

      {/* Change Password Card */}
      <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-800 mb-1">
          Change Password
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          Update your login password
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              Current Password
            </label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handlePasswordChange}
              placeholder="••••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 outline-none focus:border-blue-500 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              New Password
            </label>
            <input
              type="password"
              name="newPass"
              value={passwords.newPass}
              onChange={handlePasswordChange}
              placeholder="••••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 outline-none focus:border-blue-500 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-blue-500 mb-1.5 block">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              placeholder="••••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 outline-none focus:border-blue-500 transition-colors duration-200"
            />
          </div>

        </div>

        {/* Error Message */}
        {passwordError && (
          <div className="mt-4 px-4 py-2.5 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-sm text-red-600 font-medium">
              ❌ {passwordError}
            </p>
          </div>
        )}

        {/* Success Message */}
        {passwordSaved && (
          <div className="mt-4 px-4 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl">
            <p className="text-sm text-emerald-600 font-medium">
              ✅ Password updated successfully!
            </p>
          </div>
        )}

        <div className="flex justify-end mt-4">
          <button
            onClick={handleUpdatePassword}
            className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors duration-200"
          >
            Update Password
          </button>
        </div>

      </div>
    </>
  )
}