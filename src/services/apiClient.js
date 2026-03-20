const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '')

export async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
    ...options,
  })

  let payload = null
  const responseText = await response.text()
  if (responseText) {
    try {
      payload = JSON.parse(responseText)
    } catch {
      payload = { error: responseText }
    }
  }

  if (!response.ok) {
    const message = payload?.error ?? payload?.title ?? 'Request failed. Please try again.'
    throw new Error(message)
  }

  return payload
}
