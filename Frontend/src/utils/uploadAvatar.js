export async function uploadAvatarToCloudinary({ file, token }) {
  if (!file) throw new Error('Please choose an image')
  if (!token) throw new Error('Missing auth token')

  const formData = new FormData()
  formData.append('avatar', file)

  const res = await fetch('https://kct-leave-management-system-backend.onrender.com/api/avatar', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  })


  if (!res.ok) {
    const data = await res.json().catch(() => null)
    throw new Error(data?.message || 'Failed to upload avatar')
  }

  return res.json()
}

